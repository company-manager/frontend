import { useContext } from 'react'
import { AuthContext } from '@context/auth/AuthContext'

const useAuth = () => {
	const { isAuthenticated, authenticate, user } = useContext(AuthContext)

	const getUser = () => user

	return { isAuthenticated, authenticate, getUser }
}
