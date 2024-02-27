import { useContext, useState } from 'react'
import { isAxiosError } from 'axios'
import { ApiStatusResponse } from '@global-types/global.types'
import { axiosPrivate } from '@lib/axios'
import { AuthContext } from '@context/auth/AuthContext'
import { LoginDataType } from '@context/auth/types'
import { UseAuthType } from '@hooks/types'
import useRedirect from '@hooks/useRedirect'
import useNotifications, { NotificationType } from '@hooks/useNotifications'

const useAuth = (): UseAuthType => {
	const { isAuthenticated, accessToken, setAccessToken } =
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
			}
		} catch (error) {
			if (isAxiosError(error)) {
				const data = error?.response?.data
				const notification: NotificationType = {
					message: data?.tip,
					type: 'error',
				}

				console.log('in', notification)

				setNotification(notification)
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

	return { isAuthenticated, accessToken, login, logout }
}

export default useAuth
