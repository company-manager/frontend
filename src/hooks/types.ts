import { LoginDataType } from '@context/auth/types'
import { Dispatch, MutableRefObject, SetStateAction } from 'react'

type UseAuthType = {
	isAuthenticated: MutableRefObject<boolean>
	setIsAuthenticated: (status: boolean) => void
	accessToken: string | null
	login: (data: LoginDataType) => Promise<number>
	logout: () => Promise<void>
	setAccessToken: Dispatch<SetStateAction<string | null>>
}

export type { UseAuthType }
