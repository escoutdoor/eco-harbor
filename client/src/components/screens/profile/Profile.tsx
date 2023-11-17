'use client'
import Link from 'next/link'
import s from './profile.module.scss'
import Image from 'next/image'
import { IoMdAddCircle } from 'react-icons/io'
import { useProfile } from '@/hooks/useProfile'
import { getName } from '@/utils/getName'
import Loading from '../loading/Loading'
import Achievements from './achievements/Achievements'

const Profile = () => {
	const { profile } = useProfile()

	return !!profile?.id ? (
		<div className={s.user}>
			<div className={s.user__top}>
				<div className={s.infoWrap}>
					<div className={s.userTop}>
						<Image
							className={s.img}
							width={150}
							height={150}
							src={`/img/${profile?.avatarPath}`}
							alt="ava"
							id="image-label"
						/>
						<div className={s.round}>
							<input type="file" />
							<IoMdAddCircle className={s.icon} />
						</div>
					</div>
					<div className={s.userInfo}>
						<p className={s.userName}>{getName(profile)}</p>
						<p>
							<span>Геолокація:</span> {profile?.city}
						</p>
						<p>
							<span>Електронна адреса: </span>
							{profile?.email}
						</p>
					</div>
				</div>
				<Link href={'/settings'} className={s.settingsBtn}>
					Налаштування
				</Link>
			</div>
			<Achievements achievements={profile.achievements} />
		</div>
	) : (
		<Loading />
	)
}

export default Profile
