import React from 'react'

export type ChildrenTypes = { children: React.ReactNode }

export type ApiErrorResponse = {
	code: number
	message: string
	tip?: string
}
