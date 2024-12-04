import { configs as eslint } from '@eslint/js'
import turbo from 'eslint-plugin-turbo'
import prettier from 'eslint-plugin-prettier/recommended'
import ts from 'typescript-eslint'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'

/** @type {import("eslint").Linter.Config} */
export const config = [
	eslint.recommended,
	ts.configs.strictTypeChecked,
	ts.configs.stylisticTypeChecked,
	{
		plugins: {
			turbo
		},
		rules: {
			'turbo/no-undeclared-env-vars': 'warn'
		}
	},
	eslintPluginUnicorn.configs['flat/recommended'],
	prettier
]
