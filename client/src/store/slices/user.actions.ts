import { createAsyncThunk } from '@reduxjs/toolkit'
import { IAuthResponse } from './user.state'
import { ICreateUser, ILogin } from '@/shared/interfaces/user.interface'
import { AuthService } from '@/services/auth/auth.service'
import { removeFromStorage } from '@/services/auth/auth.helper'
import { errorCatch } from '@/api/api.helper'

export const register = createAsyncThunk<IAuthResponse, ICreateUser>(
	'auth/register',
	async (data, thunkApi) => {
		try {
			const response = await AuthService.register(data)

			return response
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const login = createAsyncThunk<IAuthResponse, ILogin>(
	'auth/login',
	async (data, thunkApi) => {
		try {
			const response = await AuthService.login(data)

			return response
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const logout = createAsyncThunk('auth/logout', () => {
	removeFromStorage()
})

export const checkAuth = createAsyncThunk<IAuthResponse>(
	'auth/access-token',
	async (_, thunkApi) => {
		try {
			const response = await AuthService.getTokens()

			return response
		} catch (error) {
			if (errorCatch(error) === 'jwt expired') {
				thunkApi.dispatch(logout())
			}

			return thunkApi.rejectWithValue(error)
		}
	}
)
