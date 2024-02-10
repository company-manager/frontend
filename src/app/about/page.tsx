'use client'
import useAuth from '@hooks/useAuth'
import React from 'react'

const Home = () => {
	const { isAuthenticated } = useAuth()

	return (
		<div className="p-8">
			{isAuthenticated ? (
				<h1 className="text-5xl">About</h1>
			) : (
				<h1>You have no permission to se this page</h1>
			)}
		</div>
	)
}

export default Home
