'use client'
import React, { useEffect } from 'react'
import { Input } from '@ui/input'
import { Label } from '@ui/label'
import { Button } from '@ui/button'
import { useForm, SubmitHandler } from 'react-hook-form'
import useAuth from '@hooks/useAuth'
import Heading from '@components/shared/heading/Heading'
import Text from '@components/shared/text/Text'

type LoginDataType = {
	email: string
	password: string
}

const Login = () => {
	const { login, error } = useAuth()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginDataType>()

	const onSubmit: SubmitHandler<LoginDataType> = async (data) => {
		const { email, password } = data
		await login({ email, password })
	}

	return (
		<div className="c_border flex-grow !py-16">
			<div className="flex gap-16 flex-col items-center mx-auto max-w-88">
				<div className="flex flex-col gap-4 items-center">
					<Heading variant="secondary" size="xl">
						Login
					</Heading>
					<Text isCenter={true} variant="secondary" size="xs">
						Insere os dados de acesso para fazer login na tua conta
						para acederes ao dashboard.
					</Text>
				</div>

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
						{errors?.email?.type === 'pattern' && (
							<p>Email not valid</p>
						)}
						{errors?.email?.type === 'required' && (
							<p>Email is required</p>
						)}
					</div>
					<div className="mt-6">
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
					<div className="mt-6">
						<Button type="submit">Submit</Button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Login
