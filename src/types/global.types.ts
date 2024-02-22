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

type SchemaFieldErrorType = {
	invalid?: string
	required?: string
	incorrect?: string
}

export type SchemaFieldsType = {
	type: string
	name: string
	placeholder?: string
	pattern?: RegExp
	error?: SchemaFieldErrorType
}
