import Logo from '@/components/logo'
import Profile from '@/app/_home/profile'
import Message from '@/app/_home/message'
import { type Metadata } from 'next'
import { getPosts } from '@/lib/queries/blog'

export const metadata: Metadata = {
	title: 'Andrea Benato - Home'
}

const Page = async () => {
	const posts = await getPosts()
	console.log(posts)
	return (
		<div className="flex h-svh w-svw flex-col p-8">
			<div className="inline-flex w-full justify-center">
				<Logo className="w-24 fill-primary dark:fill-dark-primary" />
			</div>
			<main className="flex grow flex-col items-center justify-center gap-9">
				<Profile />
				<Message />
			</main>
		</div>
	)
}

export default Page
