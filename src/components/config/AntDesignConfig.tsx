import React, { useContext, useEffect, useMemo, useState } from 'react'
import { ConfigProvider, theme } from 'antd'

import { ThemeContext } from '@/context/themeContext/ThemeContext'

import antdCustomTheme from '@/config/antd.config'
import { themeSpecificColors } from '@/config/theme.config'
import { ChildrenTypes } from '@/types/global.types'
import StyledComponentsRegistry from '@/lib/AntdRegistry'

const AntDesignConfig = ({ children }: ChildrenTypes) => {
	const themeContext = useContext(ThemeContext)
	const [customTheme, setCustomTheme] = useState(antdCustomTheme)
	const isDarkTheme = themeContext?.theme === 'dark'
	const { dark, light } = themeSpecificColors

	useEffect(() => {
		const newThemeValue = {
			token: {
				...antdCustomTheme.token,
				colorPrimary: isDarkTheme ? dark.primary : light.primary,
			},
		}

		setCustomTheme(newThemeValue)
	}, [themeContext])

	return (
		<ConfigProvider theme={customTheme}>
			<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
		</ConfigProvider>
	)
}

export default AntDesignConfig
