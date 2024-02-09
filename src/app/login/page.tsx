'use client'
import React, { useContext } from 'react'
import { Input } from '@ui/input'
import { Label } from '@ui/label'
import { Button } from '@ui/button'
import { AuthContext } from '@context/auth/AuthContext'

const Home = () => {
	const { authenticate } = useContext(AuthContext)

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault()
		authenticate({ email: 'nuno@email.com', password: '12345' })
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
