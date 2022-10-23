#! /usr/bin/env node
const yargs = require("yargs");
const utils = require("./utils");

yargs
  .usage("\nUsage: ncli <command>")
  .command({
    command: "new <schematic> <name> [path] [ext]",
    aliases: ["n", "generate", "g"],
    desc: "Generates and files based on a schematic.",
    builder: (yargs) => yargs.default({ ext: "js", path: "." }),
    handler: () => {},
  })
  .command({
    command: "configure <schematic> <name> <path> <ext>",
    aliases: ["config", "c"],
    desc: "Configure the project according the params.",
    builder: (yargs) => yargs.default("ext", "js"),
    handler: () => {},
  })
  .help().argv;

const run = () => {
  if (yargs.argv._[0].match(/^(new|n)$/g)) {
    const { ext, path, schematic, name } = yargs.argv;

    if (name && schematic && ext && path) {
      utils.generate(schematic, name, path, ext);
    } else {
      yargs.help();
    }
  } else if (yargs.argv._[0].match(/^(config|c)$/g)) {
    console.log(":: > setting the configs > ::");
  } else {
    yargs.help();
  }
};

run();
