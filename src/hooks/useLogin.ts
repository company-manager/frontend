import { useContext, useState } from 'react'
import { AuthContext } from '@context/auth/AuthContext'
import { LoginDataType } from '@context/auth/types'
import useRedirect from '@hooks/useRedirect'
import axios from '@lib/axios'
import { isAxiosError } from 'axios'

const useLogin = () => {
	const [error, setError] = useState<{
		code: number
		message: string
		tip?: string
	} | null>(null)
	const { redirect } = useRedirect()
	const { setAccessToken } = useContext(AuthContext)

	const login = async ({ email, password }: LoginDataType) => {
		try {
			const response = await axios.post('auth/login', {
				user: {
					email,
					password,
				},
			})

			if (response.data) {
				setError(null)
				const { accessToken } = response.data.tokens
				// TODO: set user id

				setAccessToken(accessToken)
				redirect('/dashboard')
			}
		} catch (e) {
			if (isAxiosError(e)) {
				setError(e?.response?.data)
			}
		}
	}

	return { login, error }
}

export default useLogin
