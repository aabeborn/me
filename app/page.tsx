import Image from 'next/image'
import Logo from '@/components/logo'
import { type Metadata } from 'next'
import Socials from './_home/socials'

export const metadata: Metadata = {
	title: 'Andrea Benato - Home'
}

const Page = () => {
	return (
		<div className="w-svw h-svh p-8 flex flex-col">
			<div className="w-full inline-flex justify-center">
				<Logo className="fill-primary-light w-24 dark:fill-dark-primary-light" />
			</div>
			<main className="flex flex-col grow items-center justify-center">
				<div className="flex flex-col md:flex-row w-full max-w-[32rem] gap-8 items-center text-center md:text-start dark:text-dark-primary">
					<Image
						src="/me.jpg"
						width={128}
						height={128}
						className="rounded-full"
						alt="Andrea Benato"
						quality={100}
					/>
					<div className="flex flex-col grow gap-4">
						<span className=" font-display font-regular">
							Ciao! I&apos;m{' '}
							<span className="font-accent text-lg leading-1 font-bold hover:text-orange-400 dark:hover:text-primary-light ">
								Andrea
							</span>
							, a frontend developer currently working as Frontend
							Tech and Team leader at Deltatre in Italy
						</span>
						<div className="inline-flex gap-6 justify-center md:justify-start">
							<Socials />
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}

export default Page
