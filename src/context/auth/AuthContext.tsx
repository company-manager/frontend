'use client'
import { createContext, useState, useEffect, useContext } from 'react'
import { setCookie, parseCookies } from 'nookies'
import { ChildrenTypes } from '@global-types/global.types'

type LoginData = {
	email: string
	password: string
}

type AuthContextType = {
	isAuthenticated: boolean
	user: UserType
	authenticate: (data: LoginData) => Promise<void>
}

type UserType = {
	id: string
	first_name: string
	last_name: string
	email: string
	role_id?: number
}

type JWTResponseType = {
	accessToken: string
	refreshToken: string
}

type ResponseDataType = {
	tokens: JWTResponseType
	user: UserType
}

type ErrorResponse = {
	code?: string
	message?: string
	tip?: string
}

export const AuthContext = createContext({} as AuthContextType)

const AuthContextProvider = ({ children }: ChildrenTypes) => {
	const [user, setUser] = useState<UserType | null>(null)
	const origin = process.env.API_ORIGIN || 'http://localhost:3003'
	const isAuthenticated = !!user

	const authenticate = async ({ email, password }: LoginData) => {
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
				const { accessToken, refreshToken } = tokens

				setUser(user)
				setCookie({}, 'a_token', accessToken, { maxAge: 10 })
				setCookie({}, 'r_token', refreshToken)
			}

			if (!data.ok) {
				const error: ErrorResponse = await data.json()
				console.log(error)
			}
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		console.log(user)
	}, [user])

	return (
		<AuthContext.Provider value={{ isAuthenticated, authenticate, user }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthContextProvider
