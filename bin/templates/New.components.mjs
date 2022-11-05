const newComponentTemplateJs = (
  name
) => `import { ${name}Container } from './${name}.styles';

const ${name} = () => {
  return <div>${name}</div>;
};
  
export default ${name};`;

const newComponentTemplateTs = (
  name
) => `import { ${name}Props } from './${name}.types';
import { ${name}Container } from './${name}.styles';

const ${name} = ({}:${name}Props) => {
  return <${name}Container>${name}</${name}Container>;
};
  
export default ${name};`;

const newComponentTypesTemplate = (name) => `export type ${name}Props = {}`;

const newComponentStitchesStylesTemplate = (
  name
) => `import { styled } from '@stitches/react';

export const ${name}Container = styled('div', {
  width: '100vw',
  height: '100vw',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
  `;

const NewComponent = {
  newComponentStitchesStylesTemplate,
  newComponentTemplateJs,
  newComponentTemplateTs,
  newComponentTypesTemplate,
};

export default NewComponent;
