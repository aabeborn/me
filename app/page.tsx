import Logo from '@/components/logo'
import {
	LinkedInLogoIcon,
	TwitterLogoIcon,
	InstagramLogoIcon,
	GitHubLogoIcon
} from '@radix-ui/react-icons'
import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'

export const metadata: Metadata = {
	title: 'Andrea Benato - Home'
}

const socials: {
	Icon: typeof LinkedInLogoIcon
	link: string
	name: string
}[] = [
	{
		Icon: LinkedInLogoIcon,
		link: 'https://www.linkedin.com/in/andreabenato/',
		name: 'LinkedIn'
	},
	{
		Icon: GitHubLogoIcon,
		link: 'https://github.com/aabeborn',
		name: 'GitHub'
	},
	{
		Icon: TwitterLogoIcon,
		link: 'https://x.com/aabeborn',
		name: 'Twitter'
	},
	{
		Icon: InstagramLogoIcon,
		link: 'https://www.instagram.com/aabeborn/',
		name: 'Instagram'
	}
]

const Page = () => {
	return (
		<div className="w-svw h-svh p-8 flex flex-col">
			<div className="w-full inline-flex justify-center">
				<Logo className="fill-primary-light w-24" />
			</div>
			<main className="flex flex-col grow items-center justify-center">
				<div className="flex flex-col md:flex-row w-full max-w-[32rem] gap-8 items-center text-center md:text-start">
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
							<span className="font-accent text-lg leading-1 font-bold hover:text-orange-400">
								Andrea
							</span>
							, a frontend developer currently working as Frontend
							Tech and Team leader at Deltatre in Italy
						</span>
						<div className="inline-flex gap-6 justify-center md:justify-start">
							{socials.map(({ Icon, link, name }) => (
								<Fragment key={name}>
									<Link
										key={name}
										href={link}
										target="_blank"
									>
										<Icon
											width="1.5rem"
											height="1.5rem"
											className="text-primary hover:text-orange-400"
										/>
									</Link>
								</Fragment>
							))}
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}

export default Page
