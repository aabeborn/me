import { PresentationIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const Competence = defineType({
	name: 'competence',
	title: 'Competence',
	type: 'document',
	fields: [
		defineField({
			name: 'name',
			type: 'string',
			validation: rule => rule.required()
		}),
		defineField({
			name: 'icon',
			type: 'icon.manager'
		})
	]
})

export const Experience = defineType({
	name: 'work',
	title: 'Work Experience',
	type: 'document',
	fields: [
		defineField({
			name: 'company',
			type: 'string',
			validation: rule => rule.required()
		}),
		defineField({
			name: 'role',
			type: 'string',
			validation: rule => rule.required()
		}),
		defineField({
			name: 'startDate',
			type: 'date',
			validation: rule => rule.required()
		}),
		defineField({
			name: 'endDate',
			type: 'date'
		}),
		defineField({
			name: 'description',
			type: 'markdown',
			validation: rule => rule.required()
		}),
		defineField({
			name: 'logo',
			type: 'image',
			validation: rule => rule.required()
		}),
		defineField({
			name: 'url',
			type: 'url',
			validation: rule => rule.required()
		}),
		defineField({
			name: 'competences',
			type: 'array',
			of: [
				{
					type: 'competence'
				}
			]
		})
	]
})

export const About = defineType({
	name: 'about',
	title: 'About Me',
	type: 'document',
	icon: PresentationIcon,
	fields: [
		defineField({
			name: 'name',
			type: 'string',
			validation: rule => rule.required()
		}),
		defineField({
			name: 'description',
			type: 'markdown',
			validation: rule => rule.required()
		}),
		defineField({
			name: 'profile',
			type: 'image',
			validation: rule => rule.required()
		}),
		defineField({
			name: 'curriculum',
			type: 'array',
			of: [
				{
					type: 'work'
				}
			]
		})
	]
})
