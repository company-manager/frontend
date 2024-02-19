import { axiosPrivate } from '@/lib/axios'
import { useEffect } from 'react'
import useRefreshToken from '@hooks/useRefreshToken'
import useAuth from '@hooks/useAuth'

const useAxios = () => {
	const { accessToken } = useAuth()
	const { refresh } = useRefreshToken()

	useEffect(() => {
		const requestInterceptor = axiosPrivate.interceptors.request.use(
			(config) => {
				const { headers } = config

				if (!headers['Authorization']) {
					headers['Authorization'] = `Bearer ${accessToken}`
				}

				return config
			},
			(error) => Promise.reject(error)
		)

		const responseInterceptor = axiosPrivate.interceptors.response.use(
			(response) => response,
			async (error) => {
				const { response, config } = error

				if (response.status === 401 && !config.sent) {
					config.sent = true

					const newAccessToken = await refresh()
					config.headers['Authorization'] = `Bearer ${newAccessToken}`
				}
			}
		)

		return () => {
			axiosPrivate.interceptors.response.eject(responseInterceptor)
			axiosPrivate.interceptors.request.eject(requestInterceptor)
		}
	}, [refresh, accessToken])

	return axiosPrivate
}

export default useAxios
