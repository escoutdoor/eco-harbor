import Category from '@/components/screens/category/Category'
import { FC } from 'react'

import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Category',
	description: 'Eco harbor website',
}

const page: FC = () => {
	return <Category />
}
export default page
