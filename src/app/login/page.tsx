'use client'
import React from 'react'
import { Input } from '@components/ui/input'
import { Label } from '@components/ui/label'

const Home = () => {
	return (
		<div className="p-8 flex gap-12 flex-col items-center mx-auto max-w-96">
			<h1 className="text-5xl">Login</h1>

			<form method="POST" onSubmit={(e) => e.preventDefault()} className="w-full" action="">
				<div>
					<Label htmlFor="email">Email</Label>
					<Input id="email" />
				</div>
				<div className="mt-6">
					<Label htmlFor="password">Password</Label>
					<Input id="password" />
				</div>
			</form>
		</div>
	)
}

export default Home
