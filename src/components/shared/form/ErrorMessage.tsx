import { ChildrenType } from '@global-types/global.types'
import React from 'react'

type PropsType = {
	children: ChildrenType
}

const ErrorMessage = ({ children }: PropsType) => {
	return <span className="text-xxs text-destructive">{children}</span>
}

export default ErrorMessage
