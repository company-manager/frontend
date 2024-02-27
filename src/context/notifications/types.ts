import { Dispatch, SetStateAction } from 'react'

type NotificationTypes = 'error' | 'warning' | undefined

export type NotificationType = {
	message: string
	type?: NotificationTypes
}

export type NotificationsContextType = {
	notification: NotificationType | null
	setNotification: Dispatch<SetStateAction<NotificationType | null>>
}
