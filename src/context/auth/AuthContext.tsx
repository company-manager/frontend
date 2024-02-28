'use client'
import {
	SetStateAction,
	Dispatch,
	MutableRefObject,
	createContext,
	useState,
	useEffect,
	useRef,
} from 'react'
import { AuthContextType } from './types'
import { ChildrenType } from '@global-types/global.types'
import axios from '@lib/axios'
import useRedirect from '@hooks/useRedirect'

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)

type PropsTypes = {
	children: ChildrenType
}

const AuthContextProvider = ({ children }: PropsTypes) => {
	const { redirect } = useRedirect()
	const [accessToken, setAccessToken] = useState<string | null>(null)
	const isAuthenticated = useRef<boolean>(false)

	const setIsAuthenticated = (status: boolean) => {
		isAuthenticated.current = status
	}

	useEffect(() => {
		const refreshToken = async () => {
			try {
				const response = await axios.get(`auth/refresh`, {
					withCredentials: true,
				})

				if (response.data) {
					const { accessToken } = response.data.tokens
					setAccessToken(accessToken)
					setIsAuthenticated(true)

					redirect('/dashboard')
				}
			} catch (error) {
				redirect('/login')
			}
		}

		refreshToken()
	}, [])

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
