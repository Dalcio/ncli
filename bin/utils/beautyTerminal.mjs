import boxen from "boxen";
import chalk from "chalk";

/**
 *
 * @param {'component' | 'hook' | 'api' | 'page'} schematic
 */
export const beautyTerminal = (schematic) => {
  const text =
    schematic === "component"
      ? chalk.white.bgBlue(schematic) + "created successfully."
      : schematic === "hook"
      ? chalk.white.bgMagenta(schematic) + "created successfully."
      : schematic === "api"
      ? chalk.black.bgYellow(schematic) + "created successfully."
      : chalk.white.bgGreen(schematic) + "created successfully.";

  console.log(
    boxen(text, {
      padding: 1,
      margin: 4,
      borderStyle: "double",
    })
  );
};

export const terminalError = (sms) => {
  console.log(
    boxen(chalk.red(sms), {
      borderStyle: "arrow",
      title: "Something went wrong",
      textAlignment: "center",
      titleAlignment: "center",
      padding: 1,
      margin: 4,
    })
  );
};
