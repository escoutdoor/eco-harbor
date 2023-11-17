'use client'
import { coordinate } from '@/helpers/coordinate'
import s from './map.module.scss'
import {
	GoogleMap,
	useJsApiLoader,
	LoadScript,
	Marker,
} from '@react-google-maps/api'
import InfoMap from '@/components/layout/informMap/InfoMap'



const Map = () => {
	const containerStyle = {
		width: '1200px',
		height: '700px',
		display: 'flex',
		alignSelf: 'center',
	}

		const center = {
			lat: 48.391542318321726, 
			lng: 35.036517964957945,
		}
		
	return (
		<div className={s.map}>
			<p>Місця переробки у вашому місті</p>
			<LoadScript
				googleMapsApiKey={process.env.NEXT_PUBLIC_MAPS_URL!}
				mapIds={['327f00d9bd231a33']}
			>
				<GoogleMap
					mapContainerStyle={containerStyle}
					center={center}
					zoom={13}
			
				>
				<InfoMap/>
				</GoogleMap>
			</LoadScript>
		</div>
	)
}
export default Map
