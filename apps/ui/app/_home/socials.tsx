import Link from 'next/link'
import { socials } from '@/utils/contants'

const Socials = () => {
	return (
		<div className="md:justify-start inline-flex justify-center gap-2">
			{Object.values(socials).map(({ name, link, icon: Icon }) => (
				<Link
					key={name}
					href={link}
					target="_blank"
					className="dark:hover:text-dark-primary hover:dark:bg-dark-background-darker hover:bg-background-darker hover:text-primary hover:transition-all md:hover:*:flex ease-in-out rounded-xl text-accent dark:text-dark-accent flex h-8 items-center gap-2 px-2"
				>
					<Icon className="stroke-2 size-5" />
					<span className="hidden font-accent font-sm font-bold">
						{name}
					</span>
				</Link>
			))}
		</div>
	)
}

export default Socials
