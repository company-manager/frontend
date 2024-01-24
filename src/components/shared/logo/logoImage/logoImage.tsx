import Image from 'next/image'
import { WrapperImage } from './logoImage.styles'

export const LogoImage = () => {
	return (
		<WrapperImage aspectRatio={7 / 1} maxHeight={68}>
			<Image alt="logo" fill src="/logo/CompanyManagerFull.png" />
		</WrapperImage>
	)
}
