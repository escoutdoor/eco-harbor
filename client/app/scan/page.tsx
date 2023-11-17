import Scan from '@/components/screens/scan/Scan'
import { Metadata } from 'next'
import { FC } from 'react'

export const metadata: Metadata = {
	title: 'Scan',
	description: 'Eco harbor website',
}

const page: FC = () => {
	return <Scan />
}
export default page
