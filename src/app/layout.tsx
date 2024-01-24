import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import { ConfigProvider } from 'antd'

import StyledComponentsRegistry from '@/lib/AntdRegistry'
import theme from '@/theme/themeConfig'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Company Manager',
	description: 'Company Manager dashboard',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<ConfigProvider theme={theme}>
			<html lang="en">
				<body className={inter.className}>
					<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
				</body>
			</html>
		</ConfigProvider>
	)
}
