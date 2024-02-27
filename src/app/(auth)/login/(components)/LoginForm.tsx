'use client'
import React from 'react'
import useAuth from '@hooks/useAuth'
import { LoginDataType } from '@context/auth/types'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button } from '@ui/button'
import ErrorMessage from '@components/shared/form/ErrorMessage'
import { Input } from '@components/ui/input'
import { Label } from '@components/ui/label'

const LoginForm = () => {
	const { login } = useAuth()
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<LoginDataType>()

	const onSubmit: SubmitHandler<LoginDataType> = async (data) => {
		try {
			const { email, password } = data
			await login({ email, password })
		} catch (e) {
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
							<ErrorMessage>Email obrigatório</ErrorMessage>
						)}
					{Object.keys(errors).length > 0 &&
						errors['email']?.type === 'pattern' && (
							<ErrorMessage>Email inválido</ErrorMessage>
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
							<ErrorMessage>Password obrigatória</ErrorMessage>
						)}
				</div>

				<Button type="submit">Entrar</Button>
			</div>
		</form>
	)
}

export default LoginForm
