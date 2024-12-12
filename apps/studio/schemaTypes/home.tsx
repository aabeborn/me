import { HomeIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const socialRef = defineType({
	name: 'socialRef',
	title: 'Social Reference',
	type: 'reference',
	to: [{ type: 'social' }]
})

export const home = defineType({
	name: 'home',
	title: 'Home',
	type: 'document',
	icon: HomeIcon,
	fields: [
		defineField({
			name: 'title',
			type: 'string',
			validation: rule => rule.required()
		}),
		defineField({
			name: 'profile',
			type: 'image',
			validation: rule => rule.required()
		}),
		defineField({
			name: 'text',
			type: 'markdown',
			validation: rule => rule.required()
		}),
		defineField({
			name: 'currentWork',
			type: 'reference',
			to: { type: 'work' }
		}),
		defineField({
			name: 'caption',
			type: 'string',
			validation: rule => rule.required()
		}),
		defineField({
			name: 'socials',
			type: 'array',
			of: [
				{
					type: 'socialRef'
				}
			]
		})
	]
})
