import axios from '@lib/axios'
import useRedirect from '@hooks/useRedirect'
import useAuth from '@hooks/useAuth'

const useRefreshToken = () => {
	const { setAccessToken, setIsAuthenticated } = useAuth()
	const { redirect } = useRedirect()

	const refresh = async () => {
		try {
			const response = await axios.get(`auth/refresh`, {
				withCredentials: true,
			})

			if (response.data) {
				const { user } = response.data
				const { accessToken } = response.data.tokens

				// TODO: share user data (user context?)
				setAccessToken(accessToken)
				setIsAuthenticated(true)

				return accessToken
			}
		} catch (error) {
			setIsAuthenticated(false)
			redirect('/login')
		}
	}

	return { refresh }
}

export default useRefreshToken
