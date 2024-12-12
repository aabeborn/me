import dynamic from 'next/dynamic'
import dynamicIconImports from 'lucide-react/dynamicIconImports'
import { type LucideProps } from 'lucide-react'

const Icon = ({ name, ...props }: { name: string } & LucideProps) => {
	const Component = dynamic(
		dynamicIconImports[name as keyof typeof dynamicIconImports]
	)
	return <Component {...props} />
}

export default Icon
