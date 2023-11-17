import s from './header.module.scss'
import Image from 'next/image';
import Menu from './menu/Menu';
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
				Реєстрація
			</button>
		</div>
	)
}
export default Header;