import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { ChildrenType } from '@global-types/global.types'

const textVariants = cva('leading-very-tight', {
	variants: {
		variant: {
			default: 'text-coral dark:text-white',
			secondary: 'text-dark-grey dark:text-light-grey',
		},
		size: {
			xxs: 'text-xxs',
			xs: 'text-xs',
			base: 'text-base',
		},
		isCenter: {
			true: 'text-center',
			false: '',
		},
	},
	defaultVariants: {
		variant: 'default',
		size: 'base',
		isCenter: false,
	},
})

interface PropsType
	extends VariantProps<typeof textVariants>,
		React.HTMLAttributes<HTMLParagraphElement> {
	children: ChildrenType
}

const Text = ({ children, className, variant, size, isCenter }: PropsType) => (
	<p className={cn(textVariants({ variant, size, className, isCenter }))}>
		{children}
	</p>
)

export default Text
