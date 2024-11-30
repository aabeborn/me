'use client'
import { Provider } from '@/context/colorSchema'
import { useState, type ReactNode } from 'react'
import type { ColorSchema } from '@/utils/types'

interface Props {
	children: ReactNode
}

export const ColorSchemaProvider = ({ children }: Props) => {
	const [schema, setSchema] = useState<ColorSchema>()
	return (
		<div className={schema}>
			<Provider value={{ value: schema, setValue: setSchema }}>
				{children}
			</Provider>
		</div>
	)
}
