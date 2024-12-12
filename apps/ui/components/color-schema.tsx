'use client'
import { Provider } from '@/context/color-schema'
import { useState, type ReactNode } from 'react'
import type { ColorSchema } from '@/utils/types'

interface Properties {
	readonly children: ReactNode
}

export const ColorSchemaProvider = ({ children }: Properties) => {
	const [schema, setSchema] = useState<ColorSchema>()
	return (
		<div className={schema}>
			<Provider value={{ value: schema, setValue: setSchema }}>
				{children}
			</Provider>
		</div>
	)
}
