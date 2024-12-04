/** @type {import('prettier').Config} */

const config = {
	arrowParens: 'avoid',
	bracketSameLine: false,
	bracketSpacing: true,
	semi: false,
	singleQuote: true,
	jsxSingleQuote: false,
	quoteProps: 'as-needed',
	trailingComma: 'none',
	singleAttributePerLine: true,
	htmlWhitespaceSensitivity: 'css',
	vueIndentScriptAndStyle: true,
	proseWrap: 'never',
	insertPragma: false,
	printWidth: 80,
	requirePragma: false,
	tabWidth: 4,
	useTabs: true,
	embeddedLanguageFormatting: 'auto',
	plugins: ['prettier-plugin-tailwindcss']
}

export default config
