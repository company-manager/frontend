import { LoginDataType } from '@context/auth/types'
import { ApiStatusResponse } from '@global-types/global.types'

type UseAuthType = {
	isAuthenticated: boolean
	accessToken: string | null
	login: (data: LoginDataType) => Promise<void>
	logout: () => Promise<void>
	error: ApiStatusResponse | null
}

export type { UseAuthType }
