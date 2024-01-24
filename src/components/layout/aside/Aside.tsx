import { Logo } from '@/components/shared/logo/Logo'
import { AsideWrapper } from './Aside.styles'
import { Container } from '@/components/shared/container/Container.styles'
import NavMenu from './nav/nav'

const Aside = () => {
	return (
		<AsideWrapper>
			<Container>
				<Logo />
				<NavMenu />
			</Container>
		</AsideWrapper>
	)
}
export default Aside
