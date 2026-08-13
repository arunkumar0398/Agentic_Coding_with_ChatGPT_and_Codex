# Read-only Project Context MCP Server

This example exposes only repository documentation under `docs/` and `security/` through three tools:

- `list_docs`
- `search_docs(query)`
- `get_doc(path)`

It intentionally does **not** expose arbitrary filesystem reads, writes, shell commands, SQL, or network fetches.

## Build

```bash
npm install
npm run build
```

## Test with MCP Inspector

From this directory after building:

```bash
npx @modelcontextprotocol/inspector node build/index.js
```

## Codex configuration example

Use an absolute path in a real configuration:

```toml
[mcp_servers.project_context]
command = "node"
args = ["/ABSOLUTE/PATH/TO/agentic-coding-chatgpt-codex/examples/mcp/project-context-server/build/index.js"]
```

The MCP 2026-07-28 TypeScript server SDK uses the split `@modelcontextprotocol/server` package. STDIO servers must keep stdout reserved for protocol messages; this example logs only to stderr.
