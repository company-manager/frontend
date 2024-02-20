'use client'
import React, { useEffect } from 'react'
import { Input } from '@ui/input'
import { Label } from '@ui/label'
import { Button } from '@ui/button'
import { useForm, SubmitHandler } from 'react-hook-form'
import useAuth from '@hooks/useAuth'

type LoginDataType = {
	email: string
	password: string
}

const Home = () => {
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

	useEffect(() => {
		console.log(errors.email)
	}, [errors])

	return (
		<div className="p-8 flex gap-12 flex-col items-center mx-auto max-w-96">
			<h1 className="text-5xl">Login</h1>

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
				</div>
				<div className="mt-6">
					<Button type="submit">Submit</Button>
				</div>
			</form>
		</div>
	)
}

export default Home
