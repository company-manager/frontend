import React from 'react'
import { Input } from '@/components/ui/input'

const Home = () => {
	return (
		<div className="p-8 flex flex-col gap-8 max-w-96 mx-auto items-center">
			<h1 className="text-5xl">Login</h1>
			<div className="mt-8 w-full">
				<form method="POST" action="https://companymanager.space/api/v1/auth/login">
					<Input className="w-full" />
				</form>
			</div>
		</div>
	)
}

export default Home
