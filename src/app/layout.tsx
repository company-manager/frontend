'use client'
import { ChildrenTypes } from '@/types/global.types'
import GlobalStyles from '@/styles/globals.styles'

export default function RootLayout({ children }: ChildrenTypes) {
	return (
		<html lang="en">
			<GlobalStyles>
				<body>
					<main>{children}</main>
				</body>
			</GlobalStyles>
		</html>
	)
}
