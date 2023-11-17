import { UserService } from '@/services/user/user.service'
import { IChangeUser } from '@/shared/interfaces/user.interface'
import { useMutation } from '@tanstack/react-query'

export const useUpdateProfile = () => {
	const {
		mutate: updateProfile,
		error,
		isPending,
	} = useMutation({
		mutationKey: ['update profile'],
		mutationFn: async (data: IChangeUser) =>
			UserService.updateProfile(data),
	})

	return {
		updateProfile,
		error,
		isPending,
	}
}
