import { ChildrenTypes } from '@/types/global.types'
import { Col, Row } from 'antd'
import { GridWrapper } from './Grid.styles'

const Grid = ({ children }: ChildrenTypes) => {
	return (
		<GridWrapper>
			<Row>
				<Col span={24}>{children}</Col>
			</Row>
		</GridWrapper>
	)
}
export default Grid
