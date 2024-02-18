import { useContext } from 'react'
import { AuthContext } from '@context/auth/AuthContext'
import { UseAuthType } from './types'

const useAuth = (): UseAuthType => {
	const { isAuthenticated, accessToken } = useContext(AuthContext)

	return { isAuthenticated, accessToken }
}

export default useAuth
