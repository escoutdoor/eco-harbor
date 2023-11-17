import { instance } from '@/api/api.interceptor'
import { IUser, IChangeUser } from '@/shared/interfaces/user.interface'

const USERS_URL = '/api/users'

export const UserService = {
	async getProfile() {
		const user = await instance<IUser>({
			method: 'GET',
			url: `${USERS_URL}/profile`,
		})

		return user
	},

	async updateProfile(data: IChangeUser) {
		return await instance<IUser>({
			method: 'PUT',
			url: `${USERS_URL}/profile/update`,
			data,
		})
	},

	async toggleAchievements(achievementName: string) {
		return await instance<IUser>({
			method: 'PATCH',
			url: `${USERS_URL}/achievement`,
			data: {
				name: achievementName,
			},
		})
	},
}
