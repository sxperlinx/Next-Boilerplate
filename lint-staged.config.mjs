export default {
	'*.{js,jsx,mjs,ts,tsx,mts,mdx}': [
		'prettier --with-node-modules --ignorepath .prettierignore --write',
		'eslint --config eslint.config.mjs --fix',
	],
	'*.{json,md,css,html,yml,yaml,scss}': [
		'prettier --with-node-modules --ignorepath .prettierignore --write',
	],
};
