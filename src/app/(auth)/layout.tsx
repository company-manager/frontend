import React from 'react'
import { ChildrenType } from '@global-types/global.types'
import Footer from './(components)/Footer'

type PropsType = {
	children: ChildrenType
}

const Auth = ({ children }: PropsType) => {
	return (
		<div className="min-h-[calc(100vh_-_2rem)] 414:min-h-[calc(100vh_-_4rem)] flex flex-col justify-between gap-y-4">
			{children}
			<Footer />
		</div>
	)
}

export default Auth
