import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { markdownSchema } from 'sanity-plugin-markdown'
import { IconManager } from 'sanity-plugin-icon-manager'
import { desk } from './desk/structure'

if (
	// @ts-ignore - it is correct. Vite injects these values at build time
	!import.meta.env.SANITY_STUDIO_PROJECT_ID ||
	// @ts-ignore - it is correct. Vite injects these values at build time
	!import.meta.env.SANITY_STUDIO_DATASET
)
	throw new Error(
		'Missing SANITY_STUDIO_PROJECT_ID or SANITY_STUDIO_DATASET in environment'
	)

export default defineConfig({
	name: 'studio',
	title: 'aabeborn - Studio',
	// @ts-ignore - it is correct. Vite injects these values at build time
	projectId: import.meta.env.SANITY_STUDIO_PROJECT_ID,
	// @ts-ignore - it is correct. Vite injects these values at build time
	dataset: import.meta.env.SANITY_STUDIO_DATASET,
	// @ts-ignore - there is an error about visionTool, something not caused by me
	plugins: [
		structureTool({ structure: desk }),
		visionTool(),
		markdownSchema(),
		IconManager()
	],

	schema: {
		types: schemaTypes
	}
})
