import { useEffect } from 'react'
import useAuth from '@hooks/useAuth'
import useRedirect from '@hooks/useRedirect'

export default function isAuth(Component: any) {
	return function IsAuth(props: any) {
		const { isAuthenticated } = useAuth()
		const { redirect } = useRedirect()

		// useEffect(() => {
		// 	if (!isAuthenticated) {
		// 		return redirect('/login')
		// 	}
		// }, [])

		console.log('inside auth hoc')

		if (!isAuthenticated) {
			return redirect('/login')
		}

		return <Component {...props} />
	}
}
