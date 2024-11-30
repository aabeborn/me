import Image from 'next/image'
import Link from 'next/link'
import Socials from './socials'
import { work } from '@/utils/contants'

const Profile = () => {
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
			<div className="flex flex-col gap-4 grow ">
				<span className="dark:text-white font-display font-regular text-text end">
					Ciao! I&apos;m{' '}
					<span className="font-accent font-bold text-lg leading-1 hover:text-orange-400 dark:hover:text-primary-light">
						Andrea
					</span>
					, a frontend developer from Italy, currently working as
					Frontend Tech and Team leader at{' '}
					<Link
						className="flex justify-center md:justify-start items-end gap-1 font-bold px-2 pt-4"
						href={work.link}
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
