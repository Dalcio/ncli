const newPageTemplate = (name) => `import Head from 'next/head';

const ${name} = () => {
	return (
		<>
			<Head>
				<title>${name}</title>
			</Head>
			<div>
				<h1>${name}</h1>
			</div>
		</>
	);
};

export default ${name};`;

export default newPageTemplate;
