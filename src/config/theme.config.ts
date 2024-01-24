export const colors = {
	default: '#000000',
	error: '#ff4d4f',
	info: '#1677ff',
	primary: '#00A5CF',
	success: '#52c41a',
	warning: '#faad14',
	lightGray: '#ededed',
	black: '#1A1B1C',
}

export const themeSpecificColors = {
	light: {
		lightGray: '#C2CAD1',
		offWhite: '#fafafa',
		primary: '#00A5CF0D',
	},
	dark: {
		midnightBlue: '#50577a',
		paleBlue: '#6b728e',
		primary: '#e95793',
	},
}

export const icons = {
	xs: '12px',
	md: '18px',
	lg: '24px',
}

export const breakpoints = {
	xs: 480,
	sm: 576,
	md: 768,
	lg: 992,
	xl: 1200,
	xxl: 1600,
}

export const medias = {
	upXs: `@media screen and (min-width: ${breakpoints.xs + 1}px)`,
	downXs: `@media screen and (max-width: ${breakpoints.xs}px)`,
	upSm: `@media screen and (min-width: ${breakpoints.sm + 1}px)`,
	downSm: `@media screen and (max-width: ${breakpoints.sm}px)`,
	upMd: `@media screen and (min-width: ${breakpoints.md + 1}px)`,
	downMd: `@media screen and (max-width: ${breakpoints.md}px)`,
	upLg: `@media screen and (min-width: ${breakpoints.lg + 1}px)`,
	downLg: `@media screen and (max-width: ${breakpoints.lg}px)`,
	upXl: `@media screen and (min-width: ${breakpoints.xl + 1}px)`,
	downXl: `@media screen and (max-width: ${breakpoints.xl}px)`,
	upXxl: `@media screen and (min-width: ${breakpoints.xxl + 1}px)`,
	downXxl: `@media screen and (max-width: ${breakpoints.xxl}px)`,
	hover: '@media (hover:hover)',
}

export const spacing = {
	xs: '0.25rem', // 4px
	sm: '0.5rem', // 8px
	md: '1rem', // 16px
	lg: '2rem', // 32px
	xl: '3rem', // 48px
	xxl: '4rem', // 64px
}
