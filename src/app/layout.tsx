import React from 'react'
import Link from 'next/link'
import { Fira_Sans } from 'next/font/google'
import '../styles/globals.css'
import { ChildrenTypes } from '@global-types/global.types'
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
					<nav className="flex gap-4 p-6 text-xl">
						<Link href={'/login'}>Login</Link>
						<Link href={'/dashboard'}>Dashboard</Link>
						<Link href={'/profile'}>Profile</Link>
					</nav>
					<main>{children}</main>
				</body>
			</html>
		</AuthContextProvider>
	)
}
