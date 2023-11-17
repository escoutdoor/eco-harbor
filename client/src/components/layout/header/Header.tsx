import s from './header.module.scss'
import Image from 'next/image';
import Menu from './menu/Menu';
import Link from 'next/link';
const Header = () => {
	
	return (
		<div className={s.header}>
			<Image
				width={200}
				height={32}
				className={s.avatar}
				src={`/img/HarborLogo.svg`}
				alt={'logo'}
			/>
			<Menu/>
			<button className={s.registration}>
				<Link href={'/auth?tab=register'} className={s.link}>
					Реєстрація
				</Link>
			</button>
		</div>
	)
}
export default Header;