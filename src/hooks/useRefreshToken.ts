import { useContext } from 'react'
import { AuthContext } from '@context/auth/AuthContext'
import axios from '@lib/axios'

const useRefreshToken = () => {
	const { setAccessToken } = useContext(AuthContext)

	const refresh = async () => {
		try {
			const response = await axios.get(`auth/refresh`)

			if (response.data) {
				const { accessToken } = response.data.tokens
				setAccessToken(accessToken)
			}
		} catch (error) {
			console.log(error)
		}
	}

	return { refresh }
}

export default useRefreshToken
