import { type HugeiconsProps } from 'hugeicons-react'
import type { FC, HTMLProps } from 'react'

export type ColorSchema = 'light' | 'dark' | undefined

export interface Link {
	link: string
	icon: FC<HugeiconsProps> | FC<HTMLProps<SVGSVGElement>>
	name: string
}
