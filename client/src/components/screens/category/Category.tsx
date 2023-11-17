'use client'
import { FC } from 'react'
import s from './category.module.scss'
import { useRouter, useSearchParams } from 'next/navigation'
import { CategoryData } from '@/helpers/category.data'
import CategoryItem from '@/components/ui/category/CategoryItem'

const Category: FC = () => {
	const { get } = useSearchParams()

	const { push } = useRouter()

	const tab = get('tab') ?? 'glass'
	const index = CategoryData.findIndex(item => item.tab === tab)
	return (
		<div className={s.page}>
			<div className={s.switch}>
				<div className={s.item} onClick={() => push('?tab=glass')}>
					Скло
				</div>
				<div className={s.item} onClick={() => push('?tab=paper')}>
					Папір
				</div>
				<div className={s.item} onClick={() => push('?tab=plastic')}>
					Пластик
				</div>
				<div className={s.item} onClick={() => push('?tab=organic')}>
					Органіка
				</div>
			</div>
			<div className='wrapper'>
				<CategoryItem
					name={CategoryData[index].name}
					content={CategoryData[index].content}
					image={CategoryData[index].image}
				/>
			</div>
		</div>
	)
}
export default Category
