const newAPIJS = (name) => `const handler${name} = (req, res) => {
	res.status(200).json({ name: 'Dálcio Garcia' });
};

export default handler${name};`;

const newAPITS = (
  name
) => `import type { NextApiRequest, NextApiResponse } from 'next';

type ${name}DataProps = {
	name: string;
};

const handler${name} = (
	req: NextApiRequest,
	res: NextApiResponse<${name}DataProps>
) => {
	res.status(200).json({ name: 'Dálcio Garcia' });
};

export default handler${name};
`;

const newAPI = {
  newAPIJS,
  newAPITS,
};

export default newAPI;
