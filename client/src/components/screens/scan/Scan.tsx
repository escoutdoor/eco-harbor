'use client'
import { FC } from 'react'
import s from './scan.module.scss'
import axios from 'axios'

const Scan: FC = () => {
	const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
		try {
			if (e.target.files && e.target.files[0]) {
				const formData = new FormData()
				formData.append('name', 'image')
				formData.append('file', e.target.files[0])

				axios
					.post('/ai/upload-image', formData)
					.then(res => console.log(res.data))
					.catch(error => console.error(error))
			}
		} catch (err) {
			console.log(err)
		}
	}
	return (
		<div className={s.page}>
			<div className='wrapper'>
				<div className={s.container}>
					<h1 className={s.title}>Сканер</h1>
					<span className={s.desc}>
						Ви можете завантажити зображення, а штучний інтелект визначить до
						якого типу сміття відноситься об'єкт на фото
					</span>
					<label className={s.input} htmlFor='file'>
						<span>Завантажити зображення</span>
						<input type='file' id='file' onChange={uploadImage} hidden />
					</label>
				</div>
			</div>
		</div>
	)
}
export default Scan
