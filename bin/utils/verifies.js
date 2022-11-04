const fs = require("fs");
const path = require("path");

function isAtTheRootOfANextJsProject() {
  const executedCommandDir = process.cwd();
  const nextConfigPath = path.join(executedCommandDir, "next.config");
  const nextEnvPath = path.join(executedCommandDir, "next-env.d");
  const existPath =
    fs.existsSync(`${nextConfigPath}.js`) ||
    fs.existsSync(`${nextConfigPath}.ts`) ||
    fs.existsSync(`${nextEnvPath}.ts`);
  fs.existsSync(`${nextConfigPath}.js`);

  if (existPath) {
    return true;
  }

  return false;
}

function isUsingTypescript() {
  const executedCommandDir = process.cwd();
  const tsConfigJson = path.join(executedCommandDir, "tsconfig.json");

  const existPath = fs.existsSync(tsConfigJson);

  if (existPath) {
    return true;
  }

  return false;
}

module.exports = {
  isAtTheRootOfANextJsProject,
  isUsingTypescript,
};
