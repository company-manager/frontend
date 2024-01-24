import { themeSpecificColors, colors } from '@/config/theme.config'
import styled from '@emotion/styled'

export const AsideWrapper = styled.aside`
	height: 100vh;
	background-color: ${themeSpecificColors.light.primary};
	color: ${colors.black};
	padding-top: 24px;
`
