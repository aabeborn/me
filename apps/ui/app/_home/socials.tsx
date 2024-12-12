import Link from 'next/link'
import { Suspense } from 'react'
import { cn } from '@/utils/cn'
import Icon from '@/components/icon'

interface SocialsProps {
	items: {
		name: string
		url: string
		icon: { metadata: { iconName: string } }
	}[]
}

const Socials = ({ items }: SocialsProps) => {
	return (
		<div className="inline-flex justify-center gap-2 md:justify-end">
			{Object.values(items).map(({ name, url, icon }) => (
				<Link
					key={name}
					href={url}
					target="_blank"
					className={cn([
						'text-accent flex h-8 items-center gap-2 rounded-xl px-2',
						'dark:hover:text-dark-primary hover:dark:bg-dark-background-darker dark:text-dark-accent',
						'hover:bg-background-darker hover:text-primary ease-in-out hover:transition-all md:hover:*:flex'
					])}
				>
					<Suspense>
						<Icon
							name={icon.metadata.iconName}
							className="size-5 stroke-2"
						/>
					</Suspense>
					<span className="font-accent font-sm hidden font-bold">
						{name}
					</span>
				</Link>
			))}
		</div>
	)
}

export default Socials
