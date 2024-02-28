'use client'
import { Button } from '@components/ui/button'
import useAuth from '@hooks/useAuth'

const Dashboard = () => {
	const { logout } = useAuth()

	return (
		<div>
			Hi 👋
			<br />
			<br />
			<Button onClick={logout}>Logout</Button>
		</div>
	)
}

export default Dashboard
