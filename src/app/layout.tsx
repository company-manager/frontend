'use client'
import { ChildrenTypes } from '@/types/global.types'
import { Fira_Sans } from 'next/font/google'
import '../styles/globals.css'

const firaSans = Fira_Sans({
	weight: ['400', '600'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
	display: 'swap',
})

export default function RootLayout({ children }: ChildrenTypes) {
	return (
		<html lang="en">
			<body className={firaSans.className}>
				<main>{children}</main>
			</body>
		</html>
	)
}
