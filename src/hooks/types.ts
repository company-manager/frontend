import { LoginDataType, UserType } from '@context/auth/types'

type UseAuthType = {
	isAuthenticated: boolean
	authenticate: (data: LoginDataType) => void
	getUser: () => UserType | null
	getAccessToken: () => string | undefined
}

export type { UseAuthType }
