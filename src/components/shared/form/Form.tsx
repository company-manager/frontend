'use client'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Input } from '@ui/input'
import { Label } from '@ui/label'
import { Button } from '@ui/button'
import useAuth from '@hooks/useAuth'
import { LoginDataType } from '@context/auth/types'
import { SchemaFieldsType } from '@types/global.types'

type PropsType = {
	schema: SchemaFieldsType[]
}

const Form = ({ schema }: PropsType) => {
	const { login, error } = useAuth()
	const {
		handleSubmit,
		formState: { errors },
	} = useForm<LoginDataType>()

	const onSubmit: SubmitHandler<LoginDataType> = async (data) => {
		const { email, password } = data
		await login({ email, password })
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="w-full">
			<div>
				<Label htmlFor="email">Email</Label>
				<Input
					id="email"
					{...register('email', {
						required: true,
						pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
					})}
				/>
				{errors?.email?.type === 'pattern' && <p>Email not valid</p>}
				{errors?.email?.type === 'required' && <p>Email is required</p>}
			</div>
			<div>
				<Label htmlFor="password">Password</Label>
				<Input
					type="password"
					id="password"
					{...register('password', { required: true })}
				/>
				{errors?.password?.type === 'required' && (
					<p>Password is required</p>
				)}
				{error?.tip.includes('assword is incorrect') && (
					<p>Password is incorrect</p>
				)}
			</div>
			<div>
				<Button type="submit">Submit</Button>
			</div>
		</form>
	)
}

export default Form
