'use client'
import React from 'react'
import useAuth from '@hooks/useAuth'
import isAuth from '@hoc/isAuth'

const Profile = () => {
	const { isAuthenticated } = useAuth()

	return (
		<div className="p-8">
			{isAuthenticated ? (
				<h1 className="text-5xl">Profile</h1>
			) : (
				<h1>You have no permission to se this page</h1>
			)}
		</div>
	)
}

export default isAuth(Profile)
