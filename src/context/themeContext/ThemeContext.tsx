'use client'
import { ChildrenTypes } from '@/types/global.types'
import { createContext, useEffect, useMemo, useState } from 'react'
import { ThemeContextType, ThemeType } from './ThemeContext.types'
import { get, set } from '@/utils/local'

export const ThemeContext = createContext<ThemeContextType | null>(null)

const LOCAL_STORAGE_THEME_KEY = 'theme'

const ThemeContextProvider = ({ children }: ChildrenTypes) => {
	const localStorageThemeValue = get(LOCAL_STORAGE_THEME_KEY)
	const [theme, setTheme] = useState<ThemeType>(localStorageThemeValue)

	useEffect(() => {
		if (!!theme) {
			set(LOCAL_STORAGE_THEME_KEY, theme)
		}
	}, [theme])

	const toggleTheme = () => {
		return setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
	}

	const context: ThemeContextType = {
		theme,
		toggleTheme,
	}

	return <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
}

export default ThemeContextProvider
