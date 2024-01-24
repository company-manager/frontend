import { MenuProps } from 'antd'
import { SmileOutlined, RocketOutlined, ShoppingCartOutlined, TeamOutlined } from '@ant-design/icons'

type MenuItem = Required<MenuProps>['items'][number]

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[], type?: 'group'): MenuItem {
	return {
		key,
		icon,
		children,
		label,
		type,
	} as MenuItem
}

const items: MenuProps['items'] = [
	getItem('Resumo', 'sub1', <RocketOutlined />),

	getItem('Cliente', 'sub2', <SmileOutlined />),

	getItem('Stock', 'sub4', <ShoppingCartOutlined />),

	getItem('Colaboradores', 'sub4', <TeamOutlined />),
]
export default items
