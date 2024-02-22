import { useContext } from 'react'
import { AuthContext } from '@context/auth/AuthContext'
import axios from '@lib/axios'
import useRedirect from './useRedirect'

const useRefreshToken = () => {
	const { setAccessToken } = useContext(AuthContext)
	const { redirect } = useRedirect()

	const refresh = async () => {
		try {
			const response = await axios.get(`auth/refresh`, {
				withCredentials: true,
			})

			if (response.data) {
				const { accessToken } = response.data.tokens
				setAccessToken(accessToken)

				return accessToken
			}
		} catch (error) {
			redirect('/login')
		}
	}

	return { refresh }
}

export default useRefreshToken
