// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
	plugins: ["@prettier/plugin-php"],
	quoteProps: "consistent",
	overrides: [
		{
			files: ["*.js", "*.jsx", "*.vue"],
			options: {
				singleAttributePerLine: true,
			},
		},
		{
			files: ["*.jsonc"],
			options: {
				trailingComma: "none",
			},
		},
		{
			// Reference: https://github.com/prettier/plugin-php
			files: ["*.php"],
			options: {
				parser: "php",
				useTabs: true,
				singleQuote: true,
				braceStyle: "1tbs",
			},
		},
	],
};

export default config;
