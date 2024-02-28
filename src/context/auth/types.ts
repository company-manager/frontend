import { Dispatch, MutableRefObject, SetStateAction } from 'react'

type AuthContextType = {
	isAuthenticated: MutableRefObject<boolean>
	accessToken: string | null
	setAccessToken: Dispatch<SetStateAction<string | null>>
	setIsAuthenticated: (status: boolean) => void
}

type LoginDataType = {
	email: string
	password: string
}

type UserType = {
	id: string
	first_name: string
	email: string
	accessToken: string
}

type JWTResponseType = {
	accessToken: string
	refreshToken: string
}

type ResponseDataType = {
	tokens: JWTResponseType
	user: UserType
}

type ErrorResponse = {
	code?: string
	message?: string
	tip?: string
}

export type {
	LoginDataType,
	AuthContextType,
	UserType,
	ResponseDataType,
	JWTResponseType,
	ErrorResponse,
}
