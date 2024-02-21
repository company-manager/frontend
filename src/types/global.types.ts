import React from 'react'

export type ChildrenType = React.ReactNode

export type ApiStatusResponse = {
	code: number
	message: string
	tip?: string
}

export type ApiResponse<T> = {
	code: number
	message: string
	results: T
}
