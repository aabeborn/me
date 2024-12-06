import dynamic from 'next/dynamic'
import Link from 'next/link'
import dynamicIconImports from 'lucide-react/dynamicIconImports'
import { cn } from '@/utils/cn'
import { getSocials } from '@/lib/queries/socials'
import { type LucideProps } from 'lucide-react'
import { Suspense } from 'react'

const Socials = async () => {
	const socials = await getSocials()

	const Icon = ({ name, ...others }: { name: string } & LucideProps) => {
		const Component = dynamic(
			dynamicIconImports[name as keyof typeof dynamicIconImports]
		)
		return <Component {...others} />
	}

	return (
		<div className="jus tify-center inline-flex gap-2 md:justify-start">
			{Object.values(socials).map(({ name, url, icon }) => (
				<Link
					key={name as string}
					href={url as string}
					target="_blank"
					className={cn([
						'text-accent flex h-8 items-center gap-2 rounded-xl px-2',
						'dark:hover:text-dark-primary hover:dark:bg-dark-background-darker dark:text-dark-accent',
						'hover:bg-background-darker hover:text-primary ease-in-out hover:transition-all md:hover:*:flex'
					])}
				>
					<Suspense fallback="">
						<Icon
							name={icon?.metadata?.iconName as string}
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
