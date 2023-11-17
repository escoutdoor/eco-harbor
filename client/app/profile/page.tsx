import Profile from '@/components/screens/profile/Profile'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Eco harbor | Profile',
	description: 'Eco harbor website',
}

const profile = () => {
	return <Profile />
}
export default profile
