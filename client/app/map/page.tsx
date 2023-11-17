import Map from '@/components/screens/map/Map'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Map',
	description: 'Eco harbor website',
}

const page = () => {
	return <Map />
}
export default page
