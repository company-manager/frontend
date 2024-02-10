import { useContext } from 'react'
import { AuthContext } from '@context/auth/AuthContext'
import { UseAuthType } from './types'

const useAuth = (): UseAuthType => {
	const { isAuthenticated, authenticate, user } = useContext(AuthContext)

	const getUser = () => user

	return {
		isAuthenticated,
		authenticate,
		getUser,
	}
}

export default useAuth
