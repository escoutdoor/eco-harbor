import { coordinate } from '@/helpers/coordinate';
import s from './infoMap.module.scss'

import { Marker } from '@react-google-maps/api';
import MarkerItem from './marker-item/MarkerItem';


const InfoMap = () => {
	
	return (
	
		<>
			<div className={s.wrap}>
					{coordinate.map((item) => (
						<MarkerItem item={item}/>
					))}
			</div>
		</>
	)
}
export default InfoMap;