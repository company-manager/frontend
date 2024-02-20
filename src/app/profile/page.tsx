'use client'
import React from 'react'
import useAuth from '@hooks/useAuth'
import isAuth from '@hoc/isAuth'
import { Button } from '@components/ui/button'

const Profile = () => {
	const { isAuthenticated, logout } = useAuth()

	return (
		<div className="p-8">
			{isAuthenticated ? (
				<div>
					<h1 className="text-5xl">Profile</h1>
					<Button onClick={logout}>Logout</Button>
				</div>
			) : (
				<h1>You have no permission to se this page</h1>
			)}
		</div>
	)
}

export default isAuth(Profile)
