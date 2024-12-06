import { defineField, defineType } from 'sanity'

export const socialType = defineType({
	name: 'social',
	title: 'Social',
	type: 'document',
	fields: [
		defineField({
			name: 'name',
			type: 'string',
			validation: rule => rule.required()
		}),
		defineField({
			name: 'slug',
			type: 'slug',
			options: { source: 'name' },
			validation: rule => rule.required()
		}),
		defineField({
			name: 'url',
			type: 'url',
			validation: rule =>
				rule.required() && rule.uri({ scheme: ['https'] })
		}),
		defineField({
			name: 'icon',
			type: 'icon.manager',
			validation: rule => rule.required()
		})
	]
})

export const socialsType = defineType({
	name: 'socials',
	title: 'Socials',
	type: 'array',
	of: [{ type: 'social' }]
})
