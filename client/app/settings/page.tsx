import Settings from '@/components/screens/profile/settings/Settings'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Settings',
	description: 'Eco harbor website',
}

const page = () => {
	return <Settings />
}
export default page
