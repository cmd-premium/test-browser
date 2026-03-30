import { execSync } from "node:child_process";
import { existsSync } from "node:fs";

if (!existsSync(".git")) process.exit(0);
try {
  execSync("git config core.hooksPath .githooks", { stdio: "ignore" });
} catch {
  /* no git in PATH or not a git checkout */
}
