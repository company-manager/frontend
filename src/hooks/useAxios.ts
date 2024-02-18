import { axiosPrivate } from '@/lib/axios'
import { useEffect } from 'react'
import useRefreshToken from '@hooks/useRefreshToken'

const useAxios = () => {
	const { refresh } = useRefreshToken()

	useEffect(() => {
		const requestInterceptor = axiosPrivate.interceptors.request.use(
			(request) => {
				console.log('in request')
				console.log(request)
				return request
			},
			(error) => {
				// TODO: refresh token ??
				console.log('_request_error:', error)
			}
		)
		const responseInterceptor = axiosPrivate.interceptors.response.use(
			(response) => {
				console.log('in response')
				console.log(response)
				return response
			},
			async (error) => {
				// TODO: refresh token ??
				const code = error.status
				if (code === 401) {
					await refresh()
				}

				console.log('_response_error:', error)
			}
		)

		return () => {
			axiosPrivate.interceptors.response.eject(responseInterceptor)
			axiosPrivate.interceptors.request.eject(requestInterceptor)
		}
	}, [refresh])

	return axiosPrivate
}

export default useAxios
