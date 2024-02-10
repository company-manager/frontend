type LoginDataType = {
	email: string
	password: string
}

type AuthContextType = {
	isAuthenticated: boolean
	user: UserType | null
	authenticate: (data: LoginDataType) => Promise<void>
}

type UserType = {
	id: string
	first_name: string
	last_name: string
	email: string
	role_id?: number
	accessToken?: string
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
