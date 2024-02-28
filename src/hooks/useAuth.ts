import { useContext } from 'react'
import { isAxiosError } from 'axios'
import { ApiStatusResponse } from '@global-types/global.types'
import { axiosPrivate } from '@lib/axios'
import { AuthContext } from '@context/auth/AuthContext'
import { LoginDataType } from '@context/auth/types'
import { NotificationType } from '@context/notifications/types'
import { UseAuthType } from '@hooks/types'
import useRedirect from '@hooks/useRedirect'
import useNotifications from '@hooks/useNotifications'
import errors from '@utils/errors'

const useAuth = (): UseAuthType => {
	const { accessToken, setAccessToken, isAuthenticated, setIsAuthenticated } =
		useContext(AuthContext)
	const { setNotification } = useNotifications()
	const { redirect } = useRedirect()

	const login = async ({ email, password }: LoginDataType) => {
		try {
			const response = await axiosPrivate.post('auth/login', {
				user: {
					email,
					password,
				},
			})

			if (response.status === 200) {
				setNotification(null)
				const { user, tokens } = response.data
				const { accessToken } = tokens
				const { id } = user

				//TODO setUser(id)

				setAccessToken(accessToken)
				redirect('/dashboard')

				return response.status
			}
		} catch (error) {
			if (isAxiosError(error)) {
				let message = ''
				const data = error?.response?.data
				const isPasswordIncorrect = data?.tip
					.toLowerCase()
					.includes('password is incorrect')
				const isEmailIncorrect = data?.tip
					.toLowerCase()
					.includes('email not found')

				if (isPasswordIncorrect)
					message = errors.login.password.incorrect
				if (isEmailIncorrect) message = errors.login.email.incorrect

				const notification: NotificationType = {
					message: !!message ? message : errors.login.generic,
					type: 'error',
				}

				setNotification(notification)

				return error?.response?.data?.code
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

	return {
		isAuthenticated,
		setIsAuthenticated,
		accessToken,
		login,
		logout,
		setAccessToken,
	}
}

export default useAuth
