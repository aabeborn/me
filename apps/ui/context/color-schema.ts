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
	const context_ = useContext(context)
	if (!context_) {
		throw new Error(
			'useColorSchema must be used within a ColorSchemaProvider'
		)
	}
	return context_
}

const { Provider } = context

export { useColorSchema, Provider }
