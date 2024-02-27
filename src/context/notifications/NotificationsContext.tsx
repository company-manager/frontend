import { createContext, useState } from 'react'
import { NotificationType, NotificationsContextType } from './types'
import { ChildrenType } from '@global-types/global.types'

export const NotificationsContext = createContext<NotificationsContextType>(
	{} as NotificationsContextType
)

type PropTypes = {
	children: ChildrenType
}

const NotificationsProvider = ({ children }: PropTypes) => {
	const [notification, setNotification] = useState<NotificationType | null>(
		null
	)

	return (
		<NotificationsContext.Provider
			value={{ notification, setNotification }}
		>
			{children}
		</NotificationsContext.Provider>
	)
}

export default NotificationsProvider
