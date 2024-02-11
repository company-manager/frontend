'use client'
import React, { useEffect, useState } from 'react'
import useAuth from '@hooks/useAuth'
import isAuth from '@hoc/isAuth'

const Dashboard = () => {
	const [users, setUsers] = useState<any>([])
	const { isAuthenticated, getAccessToken } = useAuth()
	const accessToken = getAccessToken()

	const getUsers = async () => {
		const response = await fetch('http://localhost:3003/api/v1/users', {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		})
		if (!response.ok) {
			// TRY REFRESH TOKEN ?
		}

		if (response.ok) {
			const data = await response.json()
			const results = await data.results
			setUsers(results)
		}
	}

	useEffect(() => {
		getUsers()
	}, [])

	return (
		<div className="p-8">
			{isAuthenticated ? (
				<div>
					<h1 className="text-5xl">Dashboard</h1>
					<h2 className="text-xl">Users</h2>
					<br />
					<ul>
						{users?.map((user: any) => (
							<li key={user?.id}>{user?.first_name}</li>
						))}
					</ul>
				</div>
			) : (
				<h1>You have no permission to se this page</h1>
			)}
		</div>
	)
}

export default isAuth(Dashboard)
