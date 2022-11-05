import fs from "fs";
import path from "path";
import { isAtTheRootOfANextJsProject } from "./verifies.mjs";
import { beautyTerminal, terminalError } from "./beautyTerminal.mjs";
import { capitalize, fileName, formatIntoHookName } from "./formatters.mjs";
import NewComponent from "../templates/New.components.mjs";
import newPageTemplate from "../templates/NewPage.mjs";
import newHook from "../templates/newHookTemplate.mjs";
import newAPI from "../templates/newApi.mjs";

/**
 *
 * @param {'hook' | 'component' | 'page' | 'api'} element the element to be created
 * @param {string} name the name of element to be created
 * @param {string} currPath the path where it will be created
 * @param {'ts' | 'js'} ext the path where it will be created
 */
export default function generate(element, name, currPath, ext) {
  if (isAtTheRootOfANextJsProject()) {
    let targetDir = path.join(process.cwd(), "src");
    const normalized = path.normalize(currPath);

    switch (element) {
      case "component":
      case "c":
        const componentName = capitalize(name);
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
        beautyTerminal("component");
        break;
      case "hook":
      case "h":
        const hookName = formatIntoHookName(name);
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
        beautyTerminal("hook");
        break;
      case "api":
      case "a":
        const apiName = capitalize(name);
        const apiFileName = fileName(name);
        targetDir = path.join(targetDir, "pages", "api", normalized);

        fs.writeFileSync(
          path.join(targetDir, `${apiFileName}.${ext}`),
          ext === "js" ? newAPI.newAPIJS(apiName) : newAPI.newAPITS(apiName)
        ); // api
        beautyTerminal("api");
        break;
      case "page":
      case "p":
        const pageName = capitalize(name);
        targetDir = path.join(targetDir, "pages", normalized);

        if (!fs.existsSync(targetDir)) {
          fs.mkdirSync(targetDir);
        }

        fs.writeFileSync(
          path.join(targetDir, `${pageName}.${ext}x`),
          newPageTemplate(pageName)
        ); // Page.tsx
        beautyTerminal("page");
        break;
      default:
        throw new Error();
    }
  } else {
    terminalError(
      `the path::> ${process.cwd()}\n does not correspond to a next project`
    );
  }
}
