import { ChildrenType } from '@global-types/global.types'

type PropsTypes = {
	children: ChildrenType
}

const Container = ({ children }: PropsTypes) => {
	return <div className="m-4 h-full w-full">{children}</div>
}
export default Container
