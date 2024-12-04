import type { ColorSchema } from '@/utils/types'
import {
	createContext,
	useContext,
	type Dispatch,
	type SetStateAction
} from 'react'

const context = createContext<{
	value: ColorSchema
	setValue: Dispatch<SetStateAction<ColorSchema>>
	// eslint-disable-next-line unicorn/no-null
} | null>(null)

const useColorSchema = () => {
	const ctx = useContext(context)
	if (!ctx) {
		throw new Error(
			'useColorSchema must be used within a ColorSchemaProvider'
		)
	}
	return ctx
}

const { Provider } = context

export { useColorSchema, Provider }
