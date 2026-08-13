import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { McpServer } from "@modelcontextprotocol/server";
import { StdioServerTransport } from "@modelcontextprotocol/server/stdio";
import { z } from "zod";

const currentFile = fileURLToPath(import.meta.url);
const projectRoot = path.resolve(path.dirname(currentFile), "../../../..");
const allowedRoots = [
  path.join(projectRoot, "docs"),
  path.join(projectRoot, "security"),
];
const MAX_RESULTS = 12;
const MAX_FILE_BYTES = 128_000;

function isAllowed(candidate: string): boolean {
  const resolved = path.resolve(candidate);
  return allowedRoots.some((root) => resolved === root || resolved.startsWith(`${root}${path.sep}`));
}

function resolveAllowed(relativePath: string): string {
  const resolved = path.resolve(projectRoot, relativePath);
  if (!isAllowed(resolved)) {
    throw new Error("Requested path is outside the read-only documentation roots");
  }
  return resolved;
}

async function walk(root: string): Promise<string[]> {
  const output: string[] = [];
  const entries = await readdir(root, { withFileTypes: true });
  for (const entry of entries) {
    const absolute = path.join(root, entry.name);
    if (entry.isDirectory()) {
      output.push(...(await walk(absolute)));
    } else if (entry.isFile() && /\.(md|txt|json|toml|ya?ml)$/i.test(entry.name)) {
      output.push(absolute);
    }
  }
  return output;
}

async function listAllowedFiles(): Promise<string[]> {
  const files = (await Promise.all(allowedRoots.map((root) => walk(root)))).flat();
  return files.map((absolute) => path.relative(projectRoot, absolute)).sort();
}

const server = new McpServer({
  name: "project-context",
  version: "0.2.0",
});

server.registerTool(
  "list_docs",
  {
    description: "List readable project documentation files exposed by this server.",
    inputSchema: z.object({}),
  },
  async () => ({
    content: [{ type: "text", text: (await listAllowedFiles()).join("\n") || "No documentation files found." }],
  }),
);

server.registerTool(
  "search_docs",
  {
    description: "Search exposed project documentation using a case-insensitive text query.",
    inputSchema: z.object({
      query: z.string().min(2).max(120),
    }),
  },
  async ({ query }) => {
    const needle = query.toLowerCase();
    const matches: string[] = [];
    for (const relativePath of await listAllowedFiles()) {
      const absolute = resolveAllowed(relativePath);
      const info = await stat(absolute);
      if (info.size > MAX_FILE_BYTES) continue;
      const text = await readFile(absolute, "utf8");
      const lines = text.split(/\r?\n/);
      lines.forEach((line, index) => {
        if (matches.length < MAX_RESULTS && line.toLowerCase().includes(needle)) {
          matches.push(`${relativePath}:${index + 1}: ${line.trim()}`);
        }
      });
      if (matches.length >= MAX_RESULTS) break;
    }
    return {
      content: [{ type: "text", text: matches.join("\n") || `No matches for: ${query}` }],
    };
  },
);

server.registerTool(
  "get_doc",
  {
    description: "Read one exposed documentation file by repository-relative path.",
    inputSchema: z.object({
      path: z.string().min(1).max(300),
    }),
  },
  async ({ path: relativePath }) => {
    const absolute = resolveAllowed(relativePath);
    const info = await stat(absolute);
    if (!info.isFile()) throw new Error("Requested path is not a file");
    if (info.size > MAX_FILE_BYTES) throw new Error("Requested file exceeds the example size limit");
    const text = await readFile(absolute, "utf8");
    return { content: [{ type: "text", text }] };
  },
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  // STDIO MCP servers must keep stdout reserved for protocol messages.
  console.error("project-context MCP server running on stdio");
}

main().catch((error) => {
  console.error("project-context MCP server failed:", error);
  process.exit(1);
});
