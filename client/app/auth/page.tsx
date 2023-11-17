import Auth from '@/components/screens/auth/Auth'
import { FC } from 'react'

import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Eco harbor | Auth',
	description: 'Eco harbor website',
}

const page: FC = () => {
	return <Auth />
}
export default page
