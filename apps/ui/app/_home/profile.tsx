import Image from 'next/image'
import type { HTMLProps } from 'react'

interface ProfileProps extends HTMLProps<HTMLDivElement> {
	image: string
}

function Profile({ image, children }: ProfileProps) {
	return (
		<div className="dark:text-dark-primary flex w-full max-w-[32rem] flex-col items-center gap-4 text-center md:flex-row md:gap-8 md:text-start">
			<Image
				src={image}
				width={128}
				height={128}
				className="border-primary dark:border-dark-primary rounded-full border-2"
				alt="card image"
				quality={100}
			/>

			<div className="font-display font-regular text-text flex grow flex-col gap-4 dark:text-white">
				{children}
			</div>
		</div>
	)
}

export default Profile
