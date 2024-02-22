'use client'

import { Button } from '@ui/button'
import { SchemaFieldsType } from '@global-types/form/form.types'
import Field from './components/Field'
import ErrorMessage from './components/ErrorMessage'

type PropsType<T> = {
	schema: SchemaFieldsType[]
	formName: string
	onSubmit: () => void
	register: () => void
	errors: any
}

const GenericForm = ({
	schema,
	formName,
	onSubmit,
	register,
	errors,
}: PropsType<T>) => {
	return (
		<form onSubmit={onSubmit} className="w-full">
			<div className="flex flex-col gap-4">
				{schema.map((field) => {
					const {
						type,
						name,
						error,
						required,
						placeholder,
						pattern,
						label,
						inputType,
					} = field

					return (
						<div
							key={`${formName}-${name}`}
							className="flex flex-col gap-1"
						>
							<Field
								register={register}
								required={required}
								name={name}
								placeholder={placeholder}
								type={type}
								pattern={pattern}
								label={label}
								inputType={inputType}
							/>
							{Object.keys(errors).length > 0 &&
								errors[name as keyof typeof errors]?.type ===
									'required' && (
									<ErrorMessage>
										{error?.required}
									</ErrorMessage>
								)}
							{Object.keys(errors).length > 0 &&
								errors[name as keyof typeof errors]?.type ===
									'pattern' && (
									<ErrorMessage>
										{error?.invalid}
									</ErrorMessage>
								)}
						</div>
					)
				})}
				<Button type="submit">Entrar</Button>
			</div>
		</form>
	)
}

export default GenericForm
