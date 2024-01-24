import { ThemeContext } from '@/context/themeContext/ThemeContext'
import { ChildrenTypes } from '@/types/global.types'
import { Global, css } from '@emotion/react'
import { useContext, useEffect } from 'react'

import { themeSpecificColors } from '@/config/theme.config'

const GlobalStyles = ({ children }: ChildrenTypes) => {
	const theme = useContext(ThemeContext)
	const isDarkTheme = theme?.theme === 'dark'
	const { dark, light } = themeSpecificColors

	const GLOBAL_STYLES = css`
		@font-face {
			font-family: 'Lato';
			font-style: normal;
			font-weight: 400;
			src: url('../../fonts/lato/Lato-Regular.ttf'), format('ttf');
		}

		/* Eric Meyer's Reset */

		html,
		body,
		div,
		span,
		applet,
		object,
		iframe,
		h1,
		h2,
		h3,
		h4,
		h5,
		h6,
		p,
		blockquote,
		pre,
		a,
		abbr,
		acronym,
		address,
		big,
		cite,
		code,
		del,
		dfn,
		em,
		img,
		ins,
		kbd,
		q,
		s,
		samp,
		small,
		strike,
		strong,
		sub,
		sup,
		tt,
		var,
		b,
		u,
		i,
		center,
		dl,
		dt,
		dd,
		ol,
		ul,
		li,
		fieldset,
		form,
		label,
		legend,
		table,
		caption,
		tbody,
		tfoot,
		thead,
		tr,
		th,
		td,
		article,
		aside,
		canvas,
		details,
		embed,
		figure,
		figcaption,
		footer,
		header,
		hgroup,
		menu,
		nav,
		output,
		ruby,
		section,
		summary,
		time,
		mark,
		audio,
		video {
			margin: 0;
			padding: 0;
			border: 0;
			font-size: 100%;
			font: inherit;
			vertical-align: baseline;
		}

		body {
			font-family: 'Lato', sans-serif;
			background-color: ${isDarkTheme ? dark.midnightBlue : light.offWhite};
			color: ${isDarkTheme ? '#ffffff' : '#000000'};
		}

		/* HTML5 display-role reset for older browsers */

		article,
		aside,
		details,
		figcaption,
		figure,
		footer,
		header,
		hgroup,
		menu,
		nav,
		section {
			display: block;
		}

		body {
			line-height: 1;
		}

		ol,
		ul {
			list-style: none;
		}

		blockquote,
		q {
			quotes: none;
		}

		blockquote:before,
		blockquote:after,
		q:before,
		q:after {
			content: '';
			content: none;
		}

		table {
			border-collapse: collapse;
			border-spacing: 0;
		}
	`

	return (
		<>
			<Global styles={GLOBAL_STYLES} />
			{children}
		</>
	)
}

export default GlobalStyles
