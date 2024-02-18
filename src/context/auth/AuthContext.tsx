'use client'
import { createContext, useState, SetStateAction, Dispatch } from 'react'
import { ChildrenTypes } from '@global-types/global.types'
import {
	ErrorResponse,
	LoginDataType,
	ResponseDataType,
	UserType,
} from './types'
import axios from '@lib/axios'

type AuthContextType = {
	isAuthenticated: boolean
	accessToken: string | null
	setAccessToken: Dispatch<SetStateAction<string | null>>
}

export const AuthContext = createContext({} as AuthContextType)

const AuthContextProvider = ({ children }: ChildrenTypes) => {
	const [accessToken, setAccessToken] = useState<string | null>(null)
	const isAuthenticated = !!accessToken

	// will remove
	const [user, setUser] = useState<UserType | null>(null)

	return (
		<AuthContext.Provider
			value={{ isAuthenticated, accessToken, setAccessToken }}
		>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthContextProvider
