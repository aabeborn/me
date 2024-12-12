import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	experimental: {
		reactCompiler: true,
		ppr: true,
		dynamicIO: true
	},
	images: {
		domains: ['cdn.sanity.io']
	},
	transpilePackages: ['next-mdx-remote']
}

export default nextConfig
