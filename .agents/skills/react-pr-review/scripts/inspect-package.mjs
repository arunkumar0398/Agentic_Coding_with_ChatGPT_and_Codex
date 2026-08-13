import fs from "node:fs";

const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
const deps = { ...(pkg.dependencies ?? {}), ...(pkg.devDependencies ?? {}) };
const interesting = ["react", "react-dom", "@testing-library/react", "vitest", "jest", "playwright"];

for (const name of interesting) {
  if (deps[name]) console.log(`${name}: ${deps[name]}`);
}
