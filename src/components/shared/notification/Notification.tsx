'use client'
import Text from '@components/shared/text/Text'
import useNotifications from '@hooks/useNotifications'

const Notification = () => {
	const { notification } = useNotifications()

	if (!notification) return

	return <Text variant="error">{notification?.message}</Text>
}

export default Notification
