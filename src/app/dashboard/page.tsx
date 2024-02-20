'use client'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import useAuth from '@hooks/useAuth'
import isAuth from '@hoc/isAuth'
import useAxios from '@hooks/useAxios'
import { AuthContext } from '@context/auth/AuthContext'

const Dashboard = () => {
	const { accessToken } = useContext(AuthContext)
	const [users, setUsers] = useState<any>([])
	const { isAuthenticated } = useAuth()
	const axios = useAxios()

	const getUsers = useCallback(async () => {
		try {
			const response = await axios.get('users', {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			})

			if (response.data) {
				const {
					data: { results },
				} = response

				setUsers(results)
			}
		} catch (error) {
			// console.log(error)
		}
	}, [accessToken, axios])

	useEffect(() => {
		!users.length && getUsers()
	}, [getUsers, users])

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
