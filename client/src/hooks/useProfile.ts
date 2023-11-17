import { useQuery } from '@tanstack/react-query'
import { useAuth } from './useAuth'
import { UserService } from '@/services/user/user.service'

export const useProfile = async () => {
	const { user } = useAuth()

	const {
		data: profile,
		isLoading,
		error,
	} = useQuery({
		queryKey: [`profile ${user?.id}`],
		queryFn: async () => UserService.getProfile(),
		enabled: !!user?.id,
		select: ({ data }) => data,
	})

	return {
		profile,
		isLoading,
		error,
	}
}
