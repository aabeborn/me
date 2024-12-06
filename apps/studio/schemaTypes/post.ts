import { defineField, defineType } from 'sanity'

export const postType = defineType({
	name: 'post',
	title: 'Post',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			type: 'string',
			validation: rule => rule.required()
		}),
		defineField({
			name: 'slug',
			type: 'slug',
			options: { source: 'title' },
			validation: rule => rule.required()
		}),
		defineField({
			name: 'publishedAt',
			type: 'datetime',
			initialValue: () => new Date().toISOString(),
			validation: rule => rule.required()
		}),
		defineField({
			name: 'image',
			type: 'image'
		}),
		defineField({
			name: 'body',
			type: 'markdown'
		})
	]
})

export const postsType = defineType({
	name: 'posts',
	title: 'Posts',
	type: 'array',
	of: [{ type: 'post' }]
})
