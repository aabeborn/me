import Link from 'next/link'
import { socials } from '@/utils/contants'

function Socials() {
	return (
		<div className="inline-flex justify-center gap-2 md:justify-start">
			{Object.values(socials).map(({ name, link, icon: Icon }) => (
				<Link
					key={name}
					href={link}
					target="_blank"
					className="dark:hover:text-dark-primary hover:dark:bg-dark-background-darker hover:bg-background-darker hover:text-primary text-accent dark:text-dark-accent flex h-8 items-center gap-2 rounded-xl px-2 ease-in-out hover:transition-all md:hover:*:flex"
				>
					<Icon className="size-5 stroke-2" />

					<span className="font-accent font-sm hidden font-bold">
						{name}
					</span>
				</Link>
			))}
		</div>
	)
}

export default Socials
