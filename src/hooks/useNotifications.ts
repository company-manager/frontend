import { useContext } from 'react'
import { NotificationsContext } from '@context/notifications/NotificationsContext'

const useNotifications = <T>() => {
	const { notification, setNotification } = useContext(NotificationsContext)

	return { notification, setNotification }
}

export default useNotifications
