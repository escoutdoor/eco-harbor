import { coordinate } from "@/helpers/coordinate";
import { Marker } from "@react-google-maps/api";
import s from './marker.module.scss'
import { FC } from "react";
import { ICoordinate } from "@/interfaces/coordinates.interface";

const MarkerItem: FC<{item: ICoordinate}> = ({item}) => {
	const center = {
		lat: 48.391542318321726, 
		lng: 35.036517964957945,
	}
	return (
		<>
			<div className={s.wrapMarker}>
				<Marker
						position={{lat: item.lat, lng: item.lng}}
						icon={{
							url: 'https://cdn-icons-png.flaticon.com/512/173/173251.png',
							scaledSize: {
								width: 50,
								height: 50,
						},
						
					}}
				/>
				{/* <div className={s.info}>
					{item.place}
					{item.time}
				</div> */}
			</div>
		</>
	)
}
export default MarkerItem;