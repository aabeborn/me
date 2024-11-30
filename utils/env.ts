const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!

const apiVersion =
	process.env.NEXT_PUBLIC_SANITY_API_VERSION ??
	new Date().toISOString().split('T')[0]

export const sanityEnv = { dataset, projectId, apiVersion }
