import { useContext } from 'react'
import { AuthContext } from '@context/auth/AuthContext'
import { axiosPrivate } from '@lib/axios'

const useRefreshToken = () => {
	const { setAccessToken } = useContext(AuthContext)

	const refresh = async () => {
		try {
			const response = await axiosPrivate.get(`auth/refresh`)

			if (response.data) {
				const { accessToken } = response.data.tokens
				setAccessToken(accessToken)

				return accessToken
			}
		} catch (error) {
			console.error(error)
		}
	}

	return { refresh }
}

export default useRefreshToken
