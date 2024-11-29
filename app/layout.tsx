import { indieFlower, inter } from '@/utils/fonts'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'

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
		<html
			lang="en"
			className={`${inter.variable} ${indieFlower.variable}`}
		>
			<body className="antialiased bg-background text-text">
				{children}
			</body>
		</html>
	)
}
