import { sanityEnv } from '@/utils/env'
import { createClient, SanityClient } from 'next-sanity'

export const client: SanityClient = createClient({
	...sanityEnv,
	useCdn: false
})
