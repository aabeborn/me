import {
	Linkedin01Icon,
	GithubIcon,
	NewTwitterIcon,
	InstagramIcon
} from 'hugeicons-react'
import DeltatreLogo from '@/components/deltatre-logo'
import { type Link } from './types'

export const work: Link = {
	name: 'Deltatre',
	link: 'https://www.deltatre.com/',
	icon: DeltatreLogo
}

export const socials: Record<string, Link> = {
	linkedin: {
		link: 'https://www.linkedin.com/in/benato-andrea',
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
