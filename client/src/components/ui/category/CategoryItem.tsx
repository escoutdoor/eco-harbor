import { FC } from 'react'
import s from './category-item.module.scss'
import { ICategory } from '@/interfaces/category.interface'
import Image from 'next/image'

const CategoryItem: FC<ICategory> = ({ name, content, image }) => {
	return (
		<div className={s.category}>
			<h1 className={s.title}>{name}</h1>
			<ul className={s.content}>
				{content.map((item, index) => (
					<li key={index} className={s.item}>
						{item}
					</li>
				))}
			</ul>
			<Image
				width={0}
				height={0}
				sizes="100vw"
				src={image}
				alt=""
				className={s.image}
			/>
		</div>
	)
}
export default CategoryItem
