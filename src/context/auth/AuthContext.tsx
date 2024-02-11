'use client'
import { createContext, useState, useEffect } from 'react'
import { ChildrenTypes } from '@global-types/global.types'
import {
	AuthContextType,
	ErrorResponse,
	LoginDataType,
	ResponseDataType,
	UserType,
} from './types'

export const AuthContext = createContext({} as AuthContextType)

const AuthContextProvider = ({ children }: ChildrenTypes) => {
	const [user, setUser] = useState<UserType | null>(null)
	const origin = process.env.API_ORIGIN || 'http://localhost:3003'
	const isAuthenticated = !!user

	const authenticate = async ({ email, password }: LoginDataType) => {
		try {
			const data = await fetch(`${origin}/api/v1/auth/login`, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					user: {
						email,
						password,
					},
				}),
			})
			if (data.ok) {
				const { user, tokens }: ResponseDataType = await data.json()
				const { accessToken } = tokens
				const userData = { ...user, accessToken }

				setUser(userData)
			}

			if (!data.ok) {
				const error: ErrorResponse = await data.json()
				console.log(error)
			}
		} catch (error) {
			console.log(error)
		}
	}

	const refresh = async () => {
		try {
			const data = await fetch(`${origin}/api/v1/auth/refresh`)
			const { accessToken } = await data.json()

			console.log('a_token_', accessToken)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		// console.log(user)
	}, [user])

	return (
		<AuthContext.Provider value={{ isAuthenticated, authenticate, user }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthContextProvider
