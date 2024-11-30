import { sanityEnv } from '@/utils/env'
import { createClient } from '@sanity/client'

console.log(sanityEnv)

export const client = createClient({
	...sanityEnv,
	useCdn: false
})
