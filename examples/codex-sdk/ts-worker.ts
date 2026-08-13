/** Release-candidate TypeScript SDK shape.
 * Requires: npm install @openai/codex-sdk
 * LIVE RUN REQUIRED for a real Codex turn.
 */
import { Codex } from "@openai/codex-sdk";

const codex = new Codex();
const thread = codex.startThread({ workingDirectory: process.cwd() });

const turn = await thread.run("Inspect the repository read-only and propose validation commands.", {
  outputSchema: {
    type: "object",
    properties: {
      summary: { type: "string" },
      validationCommands: { type: "array", items: { type: "string" } },
    },
    required: ["summary", "validationCommands"],
    additionalProperties: false,
  },
});

console.log(turn.finalResponse);
