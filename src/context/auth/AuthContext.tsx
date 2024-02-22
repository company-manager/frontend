'use client'
import { createContext, useState, SetStateAction, Dispatch } from 'react'
import { ChildrenTypes } from '@global-types/global.types'

type AuthContextType = {
	isAuthenticated: boolean
	accessToken: string | null
	setAccessToken: Dispatch<SetStateAction<string | null>>
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)

const AuthContextProvider = ({ children }: ChildrenTypes) => {
	const [accessToken, setAccessToken] = useState<string | null>(null)
	const isAuthenticated = !!accessToken

	return (
		<AuthContext.Provider
			value={{ isAuthenticated, accessToken, setAccessToken }}
		>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthContextProvider
