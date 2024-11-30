import Link from 'next/link'
import { socials } from '@/utils/contants'

const Socials = () => {
	return (
		<div className="inline-flex gap-6 justify-center md:justify-start">
			{Object.values(socials).map(({ name, link, icon: Icon }) => (
				<Link
					key={name}
					href={link}
					target="_blank"
				>
					<Icon className="size-6 text-accent hover:text-primary dark:text-dark-accent dark:hover:text-dark-primary" />
				</Link>
			))}
		</div>
	)
}

export default Socials
