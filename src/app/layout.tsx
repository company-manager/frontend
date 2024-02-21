'use client'
import React from 'react'
import { Fira_Sans } from 'next/font/google'
import '../styles/globals.scss'
import { ChildrenType } from '@global-types/global.types'
import AuthContextProvider from '@context/auth/AuthContext'

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
			<html lang="en">
				<body className={firaSans.className}>
					<main className="p-8">{children}</main>
				</body>
			</html>
		</AuthContextProvider>
	)
}
