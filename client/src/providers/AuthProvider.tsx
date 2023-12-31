import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { EnumTokens, getAccessToken } from '@/services/auth/auth.helper'
import { FC, PropsWithChildren, useEffect } from 'react'
import Cookies from 'js-cookie'
import { usePathname } from 'next/navigation'

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const { user } = useAuth()

	const { checkAuth, logout } = useActions()

	const pathname = usePathname()

	useEffect(() => {
		const accessToken = getAccessToken()

		if (accessToken) {
			checkAuth()
		}
	}, [])

	useEffect(() => {
		const refreshToken = Cookies.get(EnumTokens.REFRESHTOKEN)
		if (!refreshToken && user) {
			logout()
		}
	}, [pathname])

	return <>{children}</>
}

export default AuthProvider
