import react from 'eslint-plugin-react'
import hooks from 'eslint-plugin-react-hooks'
import compiler from 'eslint-plugin-react-compiler'
import { config as base } from './base.js'

/** @type {import("eslint").Linter.Config} */
export const config = [
	...base,
	react.configs.flat.recommended,
	hooks.configs.flat.recommended,
	compiler.configs.flat.recommended
]
