import eslint from '@eslint/js'
import turbo from 'eslint-plugin-turbo'
import prettier from 'eslint-plugin-prettier/recommended'
import ts from 'typescript-eslint'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'

/** @type {import("eslint").Linter.Config} */
export const config = [
	eslint.configs.recommended,
	...ts.configs.strictTypeChecked,
	...ts.configs.stylisticTypeChecked,
	{
		languageOptions: {
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname
			}
		}
	},
	{
		plugins: {
			turbo
		},
		rules: {
			'turbo/no-undeclared-env-vars': 'warn'
		}
	},
	eslintPluginUnicorn.configs['flat/recommended'],
	prettier,
	{
		rules: {
			'unicorn/prevent-abbreviations': 'off'
		}
	},
	{
		ignores: ['dist/**', 'node_modules/**', '.next/**', '.turbo/**']
	}
]
