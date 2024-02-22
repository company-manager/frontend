import { Input } from '@components/ui/input'
import { Label } from '@components/ui/label'
import { useFormContext } from 'react-hook-form'

enum FieldTypes {
	INPUT = 'input',
	SELECT = 'select',
	RADIO = 'radio',
	CHECKBOX = 'checkbox',
}

type PropsTypes = {
	name: string
	variant: FieldTypes
	placeholder: string
	hasLabel: boolean
	isRequired: boolean
	regEx?: RegExp
}

const Field = ({
	variant,
	name,
	placeholder,
	hasLabel = true,
	isRequired = true,
	regEx,
}: PropsTypes) => {
	const { register } = useFormContext()

	const renderField = () => {
		switch (variant) {
			case FieldTypes.INPUT:
				return (
					<Input
						id={name}
						placeholder={placeholder}
						{...register(name, {
							required: isRequired,
							pattern: regEx,
						})}
					/>
				)
			case FieldTypes.CHECKBOX:
				return 'CHECKBOX'
			case FieldTypes.RADIO:
				return 'RADIO'
			case FieldTypes.SELECT:
				return 'SELECT'
		}
	}

	return (
		<>
			{hasLabel && <Label htmlFor="email">Email</Label>}
			{renderField()}
		</>
	)
}

export default Field
