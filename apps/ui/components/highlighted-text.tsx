import { cn } from '@/utils/cn'
import { type HTMLProps } from 'react'

const HighlightedText = ({
	children,
	className,
	...props
}: HTMLProps<HTMLElement>) => {
	return (
		<span
			className={cn(
				'font-accent dark:hover:text-primary-light eading-1 text-lg font-bold hover:text-orange-400',
				className
			)}
			{...props}
		>
			{children}
		</span>
	)
}

export default HighlightedText
