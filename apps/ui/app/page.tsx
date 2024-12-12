import Logo from '@/components/logo'
import Profile from '@/app/_home/profile'
import { getHomeData } from '@/lib/queries/home'
import { type Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import MdxText from '@/components/mdx-text'
import Socials from './_home/socials'
import Caption from '@/components/caption'

export const metadata: Metadata = {
	title: 'Andrea Benato - Home'
}

const Page = async () => {
	const { text, currentWork, profile, socials, caption } = await getHomeData()
	return (
		<div className="flex h-svh w-svw flex-col p-8">
			<div className="inline-flex w-full justify-center">
				<Logo className="fill-primary dark:fill-dark-primary w-24" />
			</div>
			<main className="flex grow flex-col items-center justify-center gap-9">
				<Profile image={profile.asset.url}>
					<MdxText text={text.replace('{role}', currentWork.role)}>
						<Link
							className="flex items-end justify-center gap-1 px-2 pt-4 font-bold md:justify-start md:px-0"
							href={currentWork.url}
							aria-label={currentWork.company}
						>
							<Image
								src={currentWork.logo.asset.url}
								alt={currentWork.company}
								width={94}
								height={16}
							/>
						</Link>
					</MdxText>
					<Socials items={socials} />
				</Profile>
				<Caption>{caption}</Caption>
			</main>
		</div>
	)
}

export default Page
