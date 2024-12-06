import { type LucideProps } from 'lucide-react'
import type { FC, HTMLProps } from 'react'

export type ColorSchema = 'light' | 'dark' | undefined

export interface Link {
	link: string
	icon: FC<LucideProps> | FC<HTMLProps<SVGSVGElement>>
	name: string
}
