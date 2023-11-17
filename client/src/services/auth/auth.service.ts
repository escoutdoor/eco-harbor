import { instance } from '@/api/api.interceptor'
import { ICreateUser, ILogin } from '@/shared/interfaces/user.interface'
import { IAuthResponse } from '@/store/slices/user.state'
import { EnumTokens, saveToStorage } from './auth.helper'
import Cookies from 'js-cookie'
import axios from 'axios'
import { getContentType } from '@/api/api.helper'

const AUTH_URL = '/api/auth'

export const AuthService = {
	async register(data: ICreateUser) {
		const res = await instance<IAuthResponse>({
			method: 'POST',
			url: `${AUTH_URL}/register`,
			data,
		})

		if (res.data.accessToken) {
			saveToStorage(res.data)
		}

		return res.data
	},

	async login(data: ILogin) {
		const res = await instance<IAuthResponse>({
			method: 'POST',
			url: `${AUTH_URL}/login`,
			data,
		})

		if (res.data.accessToken) {
			saveToStorage(res.data)
		}

		return res.data
	},

	async getTokens() {
		const refreshToken = Cookies.get(EnumTokens.REFRESHTOKEN)

		const res = await axios.post<string, { data: IAuthResponse }>(
			`${AUTH_URL}/access-token`,
			{ refreshToken },
			{ headers: getContentType() }
		)

		if (res.data.accessToken) {
			saveToStorage(res.data)
		}

		return res.data
	},
}
