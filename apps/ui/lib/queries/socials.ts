import { defineQuery } from 'next-sanity'
import { client } from '../sanity'
import { type Social } from '@aabeborn/types'

export const SOCIALS_QUERY =
	defineQuery(`*[_type == "social" && defined(slug.current)][0...12]{
  name, icon, slug, url
}`)
export const getSocials = async (): Promise<Social[]> => {
	'use cache'
	const socials = await client.fetch<Social[]>(SOCIALS_QUERY)
	return socials
}
