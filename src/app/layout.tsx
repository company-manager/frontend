import React from 'react'
import { ChildrenTypes } from '@global-types/global.types'
import { Fira_Sans } from 'next/font/google'
import '../styles/globals.scss'
import AuthContextProvider from '@context/auth/AuthContext'

const firaSans = Fira_Sans({
	weight: ['400', '600'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
	display: 'swap',
})

export default function RootLayout({ children }: ChildrenTypes) {
	return (
		<AuthContextProvider>
			<html lang="en">
				<body className={firaSans.className}>
					<main>{children}</main>
				</body>
			</html>
		</AuthContextProvider>
	)
}
