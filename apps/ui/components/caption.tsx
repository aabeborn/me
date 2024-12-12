import { cn } from '@/utils/cn'
import { type HTMLProps } from 'react'

const Caption = ({
	className,
	children,
	...props
}: HTMLProps<HTMLParagraphElement>) => {
	return (
		<p
			className={cn(
				'bg-background-darker text-primary dark:bg-dark-background-darker dark:text-dark-primary',
				'font-accent flex w-full max-w-[32rem] items-center justify-center rounded-lg p-8 text-xl',
				className
			)}
			{...props}
		>
			{children}
		</p>
	)
}

export default Caption
