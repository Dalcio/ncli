const fs = require("fs");
const path = require("path");
const formatters = require("./formatters");
const { isAtTheRootOfANextJsProject } = require("./verifies");
const NewComponent = require("../templates/New.components");
const newPageTemplate = require("../templates/NewPage");
const newHook = require("../templates/newHookTemplate");
const newAPI = require("../templates/newApi");

/**
 *
 * @param {'hook' | 'component' | 'page' | 'api'} element the element to be created
 * @param {string} name the name of element to be created
 * @param {string} currPath the path where it will be created
 * @param {'ts' | 'js'} ext the path where it will be created
 */
function generate(element, name, currPath, ext) {
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
            NewComponent.newComponentTemplateTs(componentName)
          ); // index.tsx
          fs.writeFileSync(
            path.join(targetDir, `${componentName}.styles.ts`),
            NewComponent.newComponentStitchesStylesTemplate(componentName)
          ); // Component.styles.ts
          fs.writeFileSync(
            path.join(targetDir, `${componentName}.types.ts`),
            NewComponent.newComponentTypesTemplate(componentName)
          ); // Component.types.ts
        } else {
          fs.writeFileSync(
            path.join(targetDir, `index.jsx`),
            NewComponent.newComponentTemplateTs(componentName)
          ); // index.tsx
          fs.writeFileSync(
            path.join(targetDir, `${componentName}.styles.js`),
            NewComponent.newComponentStitchesStylesTemplate(componentName)
          ); // Component.styles.js
        }
        break;
      case "hook":
      case "h":
        const hookName = formatters.formatIntoHookName(name);
        targetDir = path.join(targetDir, "hooks", normalized);

        if (!fs.existsSync(targetDir)) {
          fs.mkdirSync(targetDir);
        }

        fs.writeFileSync(
          path.join(targetDir, `${hookName}.${ext}x`),
          ext === "ts"
            ? newHook.newHookTemplateTS(hookName)
            : newHook.newHookTemplate(hookName)
        );

        break;
      case "api":
      case "a":
        const apiName = formatters.capitalize(name);
        const apiFileName = formatters.fileName(name);
        targetDir = path.join(targetDir, "pages", "api", normalized);

        fs.writeFileSync(
          path.join(targetDir, `${apiFileName}.${ext}`),
          ext === "js" ? newAPI.newAPIJS(apiName) : newAPI.newAPITS(apiName)
        ); // api

        break;
      case "page":
      case "p":
        const pageName = formatters.capitalize(name);
        targetDir = path.join(targetDir, "pages", normalized);

        if (!fs.existsSync(targetDir)) {
          fs.mkdirSync(targetDir);
        }

        fs.writeFileSync(
          path.join(targetDir, `${pageName}.${ext}x`),
          newPageTemplate(pageName)
        ); // Page.tsx

        break;
      default:
        throw new Error();
    }
    console.log(`\t:: Generated with Success🎆🎇🎉🎊 ::`);
  } else {
    console.log(
      `the path::> ${process.cwd()}\n does not correspond to a next project`
    );
  }
}

module.exports = generate;
