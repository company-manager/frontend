'use client'
import React, { useEffect } from 'react'
import { Input } from '@ui/input'
import { Label } from '@ui/label'
import { Button } from '@ui/button'
import useLogin from '@hooks/useLogin'

const Home = () => {
	const { login, error } = useLogin()

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault()

		await login({
			email: 'nuno@email.com',
			password: '12345',
		})
	}

	return (
		<div className="p-8 flex gap-12 flex-col items-center mx-auto max-w-96">
			<h1 className="text-5xl">Login</h1>

			<form onSubmit={handleSubmit} className="w-full">
				<div>
					<Label htmlFor="email">Email</Label>
					<Input id="email" />
					{error?.tip?.includes('Email') && (
						<span className="text-xs text-red-400">
							Email not valid
						</span>
					)}
				</div>
				<div className="mt-6">
					<Label htmlFor="password">Password</Label>
					<Input id="password" />
					{error?.tip?.includes('Password') && (
						<span className="text-xs text-red-400">
							Password incorrect
						</span>
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
