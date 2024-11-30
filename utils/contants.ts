import {
	Linkedin01Icon,
	GithubIcon,
	NewTwitterIcon,
	InstagramIcon,
	type HugeiconsProps
} from 'hugeicons-react'
import type { FC } from 'react'

export const socials: Record<
	string,
	{
		link: string
		icon: FC<HugeiconsProps>
		name: string
	}
> = {
	linkedin: {
		link: 'https://www.linkedin.com/in/andreabenato/',
		icon: Linkedin01Icon,
		name: 'LinkedIn'
	},
	github: {
		link: 'https://github.com/aabeborn',
		icon: GithubIcon,
		name: 'GitHub'
	},
	x: {
		link: 'https://x.com/aabeborn',
		icon: NewTwitterIcon,
		name: 'X'
	},
	instagram: {
		link: 'https://www.instagram.com/aabeborn/',
		icon: InstagramIcon,
		name: 'Instagram'
	}
}
