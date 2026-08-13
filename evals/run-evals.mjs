import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const taskPath = process.argv[2] ?? path.join(here, "tasks", "retry-regression.json");
const candidatePath = process.argv[3] ?? path.join(here, "candidates", "sample-pass.json");

const task = JSON.parse(await readFile(taskPath, "utf8"));
const candidate = JSON.parse(await readFile(candidatePath, "utf8"));

if (task.taskId !== candidate.taskId) {
  throw new Error(`Task mismatch: ${task.taskId} vs ${candidate.taskId}`);
}

const result = { taskId: task.taskId, criteria: {}, total: 0, max: 0 };
const add = (name, passed, weight, detail) => {
  result.criteria[name] = { passed, weight, score: passed ? weight : 0, detail };
  result.total += passed ? weight : 0;
  result.max += weight;
};

for (const check of task.requiredChecks) {
  add(check, candidate.checks?.[check] === "pass", task.weights[check] ?? 0, candidate.checks?.[check] ?? "missing");
}

const unexpected = (candidate.changedFiles ?? []).filter((file) => !task.allowedFiles.includes(file));
add("scope", unexpected.length === 0, task.weights.scope ?? 0, unexpected.length ? `Unexpected: ${unexpected.join(", ")}` : "Allowed files only");
add("evidence", Array.isArray(candidate.evidence) && candidate.evidence.length >= 2, task.weights.evidence ?? 0, `${candidate.evidence?.length ?? 0} evidence item(s)`);

result.percent = result.max === 0 ? 0 : Math.round((result.total / result.max) * 100);
console.log(JSON.stringify(result, null, 2));
process.exitCode = result.percent === 100 ? 0 : 1;
