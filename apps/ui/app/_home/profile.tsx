import Image from 'next/image'
import Link from 'next/link'
import Socials from './socials'
import { work } from '@/utils/contants'

function Profile() {
	return (
		<div className="dark:text-dark-primary flex w-full max-w-[32rem] flex-col items-center gap-4 text-center md:flex-row md:gap-8 md:text-start">
			<Image
				src="/me.jpg"
				width={128}
				height={128}
				className="rounded-full"
				alt="Andrea Benato"
				quality={100}
			/>

			<div className="flex grow flex-col gap-4">
				<span className="font-display font-regular text-text end dark:text-white">
					Ciao! I&apos;m{' '}
					<span className="font-accent dark:hover:text-primary-light eading-1 text-lg font-bold hover:text-orange-400">
						Andrea
					</span>
					, a frontend developer from Italy, currently working as
					Frontend Tech and Team leader at{' '}
					<Link
						className="flex items-end justify-center gap-1 px-2 pt-4 font-bold md:justify-start"
						href={work.link}
						aria-label={work.name}
					>
						{work.icon({
							className: 'h-4 fill-white'
						})}
					</Link>
				</span>

				<div className="inline-flex justify-center gap-6 md:justify-start">
					<Socials />
				</div>
			</div>
		</div>
	)
}

export default Profile
