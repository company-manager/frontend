'use client'
import React, { useState } from 'react'
import { Loader2Icon } from 'lucide-react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { LoginDataType } from '@context/auth/types'
import ErrorMessage from '@components/shared/form/ErrorMessage'
import { Input } from '@ui/input'
import { Label } from '@ui/label'
import { Button } from '@ui/button'
import useAuth from '@hooks/useAuth'
import errorMessages from '@utils/errors'

const LoginForm = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const { login } = useAuth()
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<LoginDataType>()

	const onSubmit: SubmitHandler<LoginDataType> = async (data) => {
		try {
			setIsLoading(true)
			const { email, password } = data
			const response = await login({ email, password })

			console.log(response)

			if (response !== 200) setIsLoading(false)
		} catch (error) {
			setIsLoading(false)
			console.log(error)
			console.error('SERVER ERROR')
		}
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="w-full max-w-88 mx-auto mt-16"
		>
			<div className="flex flex-col gap-4">
				<div className="flex flex-col gap-1">
					<Label htmlFor="email">Email</Label>
					<Input
						id="email"
						type="text"
						{...register('email', {
							required: true,
							pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
						})}
					/>
					{Object.keys(errors).length > 0 &&
						errors['email']?.type === 'required' && (
							<ErrorMessage>
								{errorMessages.login.email.required}
							</ErrorMessage>
						)}
					{Object.keys(errors).length > 0 &&
						errors['email']?.type === 'pattern' && (
							<ErrorMessage>
								{errorMessages.login.email.invalid}
							</ErrorMessage>
						)}
				</div>
				<div className="flex flex-col gap-1">
					<Label htmlFor="password">Password</Label>
					<Input
						id="password"
						type="password"
						{...register('password', {
							required: true,
						})}
					/>
					{errors['password']?.type === 'required' &&
						Object.keys(errors).length > 0 && (
							<ErrorMessage>
								{errorMessages.login.password.required}
							</ErrorMessage>
						)}
				</div>

				<Button disabled={isLoading} type="submit">
					Entrar{' '}
					{isLoading && (
						<div className="ml-2 animate-spin">
							<Loader2Icon size={16} />
						</div>
					)}
				</Button>
			</div>
		</form>
	)
}

export default LoginForm
