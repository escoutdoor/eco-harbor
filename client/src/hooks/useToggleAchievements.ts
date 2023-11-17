import { UserService } from '@/services/user/user.service'
import { useMutation } from '@tanstack/react-query'

export const useToggleAchievement = () => {
	const {
		mutate: toggleAchievement,
		error,
		isPending,
	} = useMutation({
		mutationKey: ['toggle achievement'],
		mutationFn: async (name: string) =>
			UserService.toggleAchievements(name),
	})

	return {
		toggleAchievement,
		error,
		isPending,
	}
}
