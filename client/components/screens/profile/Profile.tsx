import Link from 'next/link';
import s from './profile.module.scss'
import Image from 'next/image';
import {IoMdAddCircle} from 'react-icons/io'


const Profile = () => {
	
	return (
		<>
			<div className={s.user}>
					<div className={s.infoWrap}>
						<div className={s.userTop}>
							<Image
								className={s.img}
								width={150}
								height={150}
								src={'/img/noAva.png'}
								alt="ava"
								id="image-label"
							/>
							<div className={s.round}>
								<input type='file'/>
								<IoMdAddCircle className={s.icon}/>
							</div>
						</div>
						<div className={s.userInfo}>
								<p className={s.userName}>Прізвище Ім'я</p>
								<p>
									<span>Геолокація:</span> Дніпро
								</p>
								<p>
									<span>Email address:</span> test@gmail.com
								</p>
						</div>
					</div>
					<Link href={'/settings'} className={s.settingsBtn}>
						Налаштування
					</Link>
			</div>
		</>
	)
}

export default Profile;