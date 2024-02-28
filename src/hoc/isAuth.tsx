import { useEffect } from 'react'
import useAuth from '@hooks/useAuth'
import useRedirect from '@hooks/useRedirect'
import axios from '@lib/axios'

export default function isAuth(Component: any) {
	return function IsAuth(props: any) {
		const { isAuthenticated, setAccessToken, setIsAuthenticated } =
			useAuth()
		const { redirect } = useRedirect()

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

		if (!isAuthenticated) return redirect('/login')

		return <Component {...props} />
	}
}
