const newPageTemplate = (name) => `const ${name} = () => {
    return <div>${name}</div>;
  };
  
  export default ${name};
  `;
