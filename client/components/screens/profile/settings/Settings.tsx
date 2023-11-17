import { input } from '../../../../helpers/input';
import s from './settings.module.scss'

const Settings = () => {
	
	return (

			<div className={s.setting}>

				{/* <div className={s.wrapBlock}>
					{input.map((item) => (
						<input type={item.type} placeholder={item.placeholder}/>
					))}
				</div> */}
				<button className={s.saveBtn}>
					Зберегти налаштування
				</button>
			</div>

	)
}
export default Settings;