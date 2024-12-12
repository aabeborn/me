import { MDXRemote } from 'next-mdx-remote/rsc'
import HighlightedText from '@/components/highlighted-text'
import type { FC, HTMLProps } from 'react'

interface MdxTextProps extends HTMLProps<HTMLSpanElement> {
	text: string
	components?: Record<string, FC<unknown>>
}

const MdxText = ({ className, text, components, children }: MdxTextProps) => {
	return (
		<span className={className}>
			<MDXRemote
				source={text}
				components={{ HighlightedText, ...components }}
			/>
			{children}
		</span>
	)
}

export default MdxText
