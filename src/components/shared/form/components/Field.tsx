import { Input } from '@components/ui/input'
import { Label } from '@components/ui/label'
import { FieldPropsTypes, FieldEnum } from '@global-types/form/form.types'

const Field = ({
	type,
	name,
	register,
	placeholder,
	label,
	required = true,
	pattern,
}: FieldPropsTypes) => {
	const renderField = () => {
		switch (type) {
			case FieldEnum.INPUT:
				return (
					<>
						<Input
							id={name}
							placeholder={placeholder}
							{...register(name, {
								required,
								pattern,
							})}
						/>
					</>
				)
			case FieldEnum.CHECKBOX:
				return 'CHECKBOX'
			case FieldEnum.RADIO:
				return 'RADIO'
			case FieldEnum.SELECT:
				return 'SELECT'
		}
	}

	return (
		<div>
			{label && <Label htmlFor={name}>{label}</Label>}
			{renderField()}
		</div>
	)
}

export default Field
