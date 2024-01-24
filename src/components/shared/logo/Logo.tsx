import { WrapperLogo } from './Logo.styles'
import { LogoImage } from './logoImage/logoImage'
import { Version } from './version/version'

export const Logo = () => {
	return (
		<WrapperLogo>
			<LogoImage />
			<Version />
		</WrapperLogo>
	)
}

/* export const LogoMedium = () => {
	return <Image />
}

export const LogoSmall = () => {
	return <Image />
} */
