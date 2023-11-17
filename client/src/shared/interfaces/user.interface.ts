import { IAchievement } from './achievement.interface'

export interface IUser {
	id: string
	firstName: string
	avatarPath: string
	surName: string
	email: string
	city: string
	achievements: IAchievement[]
}

export interface ICreateUser
	extends Omit<IUser, 'id' | 'achievements' | 'avatarPath'> {
	password: string
}

export interface ILogin extends Pick<IUser, 'email'> {
	password: string
}

export interface IChangeUser {
	firstName?: string
	surName?: string
	email?: string
	city?: string
}
