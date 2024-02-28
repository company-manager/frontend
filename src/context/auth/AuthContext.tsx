'use client'
import { createContext, useState, useEffect, useRef } from 'react'
import { AuthContextType } from './types'
import { ChildrenType } from '@global-types/global.types'
import axios from '@lib/axios'
import useRedirect from '@hooks/useRedirect'

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)

type PropsTypes = {
	children: ChildrenType
}

const AuthContextProvider = ({ children }: PropsTypes) => {
	const [accessToken, setAccessToken] = useState<string | null>(null)
	const isAuthenticated = useRef<boolean>(false)

	const setIsAuthenticated = (status: boolean) => {
		isAuthenticated.current = status
	}

	return (
		<AuthContext.Provider
			value={{
				isAuthenticated,
				setIsAuthenticated,
				accessToken,
				setAccessToken,
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthContextProvider
