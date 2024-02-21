import { axiosPrivate } from '@/lib/axios'
import { useEffect } from 'react'
import useRefreshToken from '@hooks/useRefreshToken'
import useAuth from '@hooks/useAuth'
import useRedirect from '@hooks/useRedirect'

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
				const { response } = error
				const originalRequest = error.config

				if (response.status === 401 && !originalRequest._retry) {
					originalRequest._retry = true

					const newAccessToken = await refresh()

					originalRequest.headers[
						'Authorization'
					] = `Bearer ${newAccessToken}`

					return Promise.resolve(newAccessToken)
				}

				return Promise.reject(error)
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
