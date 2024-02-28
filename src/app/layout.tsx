'use client'
import React from 'react'
import { Fira_Sans } from 'next/font/google'
import '../styles/globals.scss'
import { ChildrenType } from '@global-types/global.types'
import AuthContextProvider from '@context/auth/AuthContext'
import NotificationsProvider from '@context/notifications/NotificationsContext'

const firaSans = Fira_Sans({
	weight: ['400', '600'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
	display: 'swap',
})

type PropsTypes = {
	children: ChildrenType
}

export default function RootLayout({ children }: PropsTypes) {
	return (
		<AuthContextProvider>
			<NotificationsProvider>
				<html lang="en">
					<body className={firaSans.className}>
						<main className="p-4 414:p-8">{children}</main>
					</body>
				</html>
			</NotificationsProvider>
		</AuthContextProvider>
	)
}
