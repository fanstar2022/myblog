import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { spawnSync } = require("child_process");

// Run quartz create non-interactively
const result = spawnSync("npx", ["quartz", "create"], {
  cwd: "C:/Users/fanst/myblog",
  stdio: ["pipe", "inherit", "inherit"],
  input: "\n", // Just press Enter to select default
  shell: true,
  timeout: 30000,
});
console.log("Exit:", result.status);
