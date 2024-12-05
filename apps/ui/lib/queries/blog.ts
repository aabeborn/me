import { defineQuery } from 'next-sanity'
import { client } from '../sanity'
import { Post } from '@aabeborn/types'

export const POSTS_QUERY =
	defineQuery(`*[_type == "post" && defined(slug.current)][0...12]{
  _id, title, slug
}`)
export const getPosts = async () => {
	'use cache'
	const posts = await client.fetch<Post>(POSTS_QUERY)
	return posts
}
