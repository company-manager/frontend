import { ChildrenTypes } from '@/types/global.types'

const Container = ({ children }: ChildrenTypes) => {
	return <div className="m-4 h-full w-full">{children}</div>
}
export default Container
