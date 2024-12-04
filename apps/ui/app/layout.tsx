import { indieFlower, inter } from '@/utils/fonts'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { ColorSchemaProvider } from '@/components/color-schema'

export const metadata: Metadata = {
	title: 'Andrea Benato',
	description: 'Andrea Benato - Frontend Developer - Personal Portfolio'
}

export default function RootLayout({
	children
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<>
			{process.env.NODE_ENV !== 'development' && <SpeedInsights />}

			<html
				lang="en"
				className={`${inter.variable} ${indieFlower.variable}`}
			>
				<body className="bg-background dark:bg-dark-background text-text antialiased">
					<ColorSchemaProvider>{children}</ColorSchemaProvider>
				</body>
			</html>
		</>
	)
}
