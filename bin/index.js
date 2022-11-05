#! /usr/bin/env node
const yargs = require("yargs");
const utils = require("./utils");
const { isUsingTypescript } = require("./utils/verifies");

yargs
  .usage("\nUsage: ncli <command>")
  .command({
    command: "generate <schematic> <name> [path] [ext]",
    aliases: ["g"],
    desc: "Generates and files based on a schematic.",
    builder: (yargs) =>
      yargs.default({ ext: isUsingTypescript() ? "ts" : "js", path: "." }),
    handler: () => {},
  })
  // .command({
  //   command: "configure <schematic> <name> <path> <ext>",
  //   aliases: ["config", "c"],
  //   desc: "Configure the project according the params.",
  //   builder: (yargs) => yargs.default("ext", "js"),
  //   handler: () => {},
  // })
  .help().argv;

const run = () => {
  try {
    if (yargs.argv._[0].match(/^(generate|g)$/g)) {
      const { ext, path, schematic, name } = yargs.argv;

      if (name && schematic && ext && path) {
        utils.generate(schematic, name, path, ext);
      } else {
        options.showHelp();
      }
    } else if (yargs.argv._[0].match(/^(config|c)$/g)) {
      // console.log(":: > setting the configs > ::");
    } else {
      yargs.showHelp();
    }
  } catch {
    yargs.showHelp();
  }
};

run();
