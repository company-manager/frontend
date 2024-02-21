import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { ChildrenType } from '@global-types/global.types'

const titleVariants = cva('leading-tight', {
	variants: {
		variant: {
			primary: 'text-primary',
			secondary: 'text-coral dark:text-white',
		},
		size: {
			sm: 'text-sm',
			md: 'text-md',
			lg: 'text-lg',
			xl: 'text-xl',
		},
	},
	defaultVariants: {
		variant: 'primary',
		size: 'md',
	},
})

interface PropsType
	extends VariantProps<typeof titleVariants>,
		React.HTMLAttributes<HTMLHeadingElement> {
	children: ChildrenType
	level?: '1' | '2' | '3' | '4' | '5'
}

const Heading = ({
	children,
	className,
	variant,
	size,
	level = '1',
}: PropsType) => {
	const H: React.ElementType = `h${level}`
	return (
		<H className={cn(titleVariants({ variant, size, className }))}>
			{children}
		</H>
	)
}

// Title.displayName = 'Title'

export default Heading
