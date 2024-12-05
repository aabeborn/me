import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { markdownSchema } from 'sanity-plugin-markdown'
console.log(import.meta)
if (
	!import.meta.env.SANITY_STUDIO_PROJECT_ID ||
	!import.meta.env.SANITY_STUDIO_DATASET
)
	throw new Error(
		'Missing SANITY_STUDIO_PROJECT_ID or SANITY_STUDIO_DATASET in environment'
	)

export default defineConfig({
	name: 'studio',
	title: 'aabeborn - Studio',

	projectId: import.meta.env.SANITY_STUDIO_PROJECT_ID,
	dataset: import.meta.env.SANITY_STUDIO_DATASET,

	plugins: [structureTool(), visionTool(), markdownSchema()],

	schema: {
		types: schemaTypes
	}
})
