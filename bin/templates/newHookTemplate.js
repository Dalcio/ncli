const newHookTemplate = (name) => `import { useState } from "react";

const ${name} = () => {
  const [title] = useState("dynamic page title");

  return {
    title,
  };
};

export default ${name};
`;

/**
 *
 * @param {string} name
 * @returns
 */
const newHookTemplateTS = (name) => `import { useState } from "react";

type ${name[0].toUpperCase().concat(name.substring(1))}Props = {
  defaultTitle: string;
};

const ${name} = ({ defaultTitle }: name[0].toUpperCase().concat(name.substring(1)) => {
  const [title] = useState(defaultTitle);

  return {
    title,
  };
};

export default ${name};
`;

const newHook = {
  newHookTemplate,
  newHookTemplateTS,
};

module.exports = newHook;
