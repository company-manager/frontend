'use client'
import React from 'react'
import { Input } from '@components/ui/input'
import { Label } from '@components/ui/label'
import { Button } from '@components/ui/button'

const Home = () => {
	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault()

		const result = await fetch('http://localhost:3003/api/v1/auth/login', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				user: {
					email: 'nuno@email.com',
					password: '12345',
				},
			}),
		})
			.then((data) => data.json())
			.then((data) => console.log(data))
	}

	return (
		<div className="p-8 flex gap-12 flex-col items-center mx-auto max-w-96">
			<h1 className="text-5xl">Login</h1>

			<form onSubmit={handleSubmit} className="w-full">
				<div>
					<Label htmlFor="email">Email</Label>
					<Input id="email" />
				</div>
				<div className="mt-6">
					<Label htmlFor="password">Password</Label>
					<Input id="password" />
				</div>
				<div className="mt-6">
					<Button type="submit">Submit</Button>
				</div>
			</form>
		</div>
	)
}

export default Home
