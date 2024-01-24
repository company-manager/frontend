'use client'
import React, { useEffect, useState } from 'react'

import ThemeContextProvider from '@/context/themeContext/ThemeContext'
import Header from '@components/layout/header/Header'
import AntDesignConfig from '@components/config/AntDesignConfig'
import { ChildrenTypes } from '@/types/global.types'
import GlobalStyles from '@/styles/globals.styles'
import Aside from '@components/layout/aside/Aside'
import { Col, Row } from 'antd'

export default function RootLayout({ children }: ChildrenTypes) {
	return (
		<ThemeContextProvider>
			<AntDesignConfig>
				<html lang="en">
					<GlobalStyles>
						<body>
							<Row>
								<Col span={5}>
									<Aside />
								</Col>
								<Col span={19}>
									<Header />
									<main>{children}</main>
								</Col>
							</Row>
						</body>
					</GlobalStyles>
				</html>
			</AntDesignConfig>
		</ThemeContextProvider>
	)
}
