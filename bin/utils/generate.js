const fs = require("fs");
const path = require("path");
const formatters = require("./formatters");
const { isAtTheRootOfANextJsProject } = require("./verifies");
const NewComponent = require("../templates/New.components");

/**
 *
 * @param {'hook' | 'component' | 'page' | 'api'} element the element to be created
 * @param {string} name the name of element to be created
 * @param {string} currPath the path where it will be created
 * @param {'ts' | 'js'} ext the path where it will be created
 */
function generate(element, name, currPath, ext = "js") {
  if (isAtTheRootOfANextJsProject()) {
    let targetDir = path.join(process.cwd(), "src");
    const normalized = path.normalize(currPath);

    switch (element) {
      case "component":
      case "c":
        const componentName = formatters.capitalize(name);
        targetDir = path.join(targetDir, "components", normalized, name);

        if (!fs.existsSync(targetDir)) {
          fs.mkdirSync(targetDir);
        }

        if (ext === "ts") {
          fs.writeFileSync(
            path.join(targetDir, `index.tsx`),
            NewComponent.newComponentTemplateTs(name)
          ); // index.tsx
          fs.writeFileSync(
            path.join(targetDir, `${name}.styles.ts`),
            NewComponent.newComponentStitchesStylesTemplate(name)
          ); // Component.styles.ts
          fs.writeFileSync(
            path.join(targetDir, `${name}.types.ts`),
            NewComponent.newComponentTypesTemplate(name)
          ); // Component.styles.ts
        } else {
          fs.writeFileSync(
            path.join(targetDir, `index.jsx`),
            NewComponent.newComponentTemplateTs(name)
          ); // index.tsx
          fs.writeFileSync(
            path.join(targetDir, `${name}.styles.js`),
            NewComponent.newComponentStitchesStylesTemplate(name)
          ); // Component.styles.js
        }
        break;
      case "hook":
      case "h":
        const hookName = formatters.formatIntoHookName(name);
        targetDir = path.join(targetDir, "hooks", normalized);

        console.log(
          ":>: Generating a new hook called " +
            hookName +
            ext +
            ":>:into " +
            path
        );
        break;
      case "api":
      case "a":
        const apiName = formatters.formatIntoHookName(name);
        targetDir = path.join(targetDir, "api", normalized);

        console.log(
          ":>: Generating a new api method called " +
            apiName +
            ext +
            ":>:into " +
            path
        );
        console.log(
          ":>: Generating the component " + componentName + ":>:into " + path
        );
        break;
      case "page":
      case "p":
        const pageName = formatters.capitalize(name);
        targetDir = path.join(targetDir, "pages", normalized);

        console.log(
          ":>: Generating a new Page " + pageName + ":>:into " + path
        );
        break;

      default:
        console.log(":: Nothing to be created ::");
    }
  } else {
    console.log(
      `the path::> ${process.cwd()}\n does not correspond to a next project`
    );
  }
}

module.exports = generate;
