'use client'
import { useForm, Form, SubmitHandler } from 'react-hook-form'
import { Input } from '@ui/input'
import { Label } from '@ui/label'
import { Button } from '@ui/button'
import useAuth from '@hooks/useAuth'
import { SchemaFieldsType } from '@global-types/form/form.types'
import Field from './components/Field'
import ErrorMessage from './components/ErrorMessage'

type PropsType = {
	schema: SchemaFieldsType[]
	formName: string
}

type LoginDataType = {
	email: string
	password: string
}

const GenericForm = ({ schema, formName }: PropsType) => {
	const { login } = useAuth()
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<LoginDataType>()

	const onSubmit: SubmitHandler<LoginDataType> = async (data) => {
		const { email, password } = data
		await login({ email, password })
	}

	// console.log(errors)

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="w-full">
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
								error={error}
							/>
							{Object.keys(errors).length > 0 &&
								errors[name]?.type === 'required' && (
									<ErrorMessage>
										Este campo é obrigatório
									</ErrorMessage>
								)}
						</div>
					)
				})}
				<Button type="submit">Submit</Button>
			</div>
		</form>
	)
}

export default GenericForm
