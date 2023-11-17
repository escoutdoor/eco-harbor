'use client'
import s from './header.module.scss'
import Image from 'next/image'
import Menu from './menu/Menu'
import Link from 'next/link'
import { useProfile } from '@/hooks/useProfile'
const Header = () => {
	const { profile, isLoading } = useProfile()

	return (
		<div className={s.header}>
			<Link href={'/'}>
				<Image
					width={200}
					height={32}
					className={s.avatar}
					src={`/img/HarborLogo.svg`}
					alt={'logo'}
				/>
			</Link>
			<Menu />
			<Link
				href={profile ? '/profile' : '/auth?tab=register'}
				className={s.link}
			>
				<button className={s.registration}>
					{profile ? 'Профіль' : 'Реєстрація'}
				</button>
			</Link>
		</div>
	)
}
export default Header
