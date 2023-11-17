import Link from 'next/link';
import s from './menu.module.scss'
import { listItem } from '../../../../helpers/list-item';


const Menu = () => {
	
	return (
		<div>
			<ul className={s.list}>
				{listItem.map((item, index) => (
					<Link href={item.href} key={index}>
						<li className={s.link}>{item.text}</li>
					</Link>
				))}
			</ul>
		</div>
	)
}
export default Menu;