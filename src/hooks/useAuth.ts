import { useContext, useState } from 'react'
import { AuthContext } from '@context/auth/AuthContext'
import { UseAuthType } from './types'
import useRedirect from './useRedirect'
import { LoginDataType } from '@context/auth/types'
import { axiosPrivate } from '@lib/axios'
import { isAxiosError } from 'axios'
import { ApiStatusResponse } from '@global-types/global.types'

const useAuth = (): UseAuthType => {
	const { isAuthenticated, accessToken, setAccessToken } =
		useContext(AuthContext)
	const [error, setError] = useState<ApiStatusResponse | null>(null)
	const { redirect } = useRedirect()

	const login = async ({ email, password }: LoginDataType) => {
		try {
			const response = await axiosPrivate.post('auth/login', {
				user: {
					email,
					password,
				},
			})

			console.log(response)

			if (response.status === 200) {
				setError(null)
				const { user, tokens } = response.data
				const { accessToken } = tokens
				const { id } = user

				//TODO setUser(id)

				setAccessToken(accessToken)
				redirect('/dashboard')
			}
		} catch (e) {
			if (isAxiosError(e)) {
				setError(e?.response?.data)
			}
		}
	}

	const logout = async () => {
		const response =
			await axiosPrivate.delete<ApiStatusResponse>('auth/logout')

		if (response.data.code === 200) {
			setAccessToken(null)
			redirect('/login')
		}
	}

	return { isAuthenticated, accessToken, login, logout, error }
}

export default useAuth
