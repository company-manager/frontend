import React from 'react'
import { Menu } from 'antd'
import items from './menuItems/menuItems'

const NavMenu = () => {
	return <Menu mode="inline" items={items} style={{ background: 'inherit', border: 'none' }} />
}

export default NavMenu
