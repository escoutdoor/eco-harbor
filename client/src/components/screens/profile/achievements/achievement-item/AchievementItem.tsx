import s from './achievement-item.module.scss'
import { IAchievement } from '@/shared/interfaces/achievement.interface'
import Image from 'next/image'
import { FC } from 'react'
import AchievementText from './achievement-text/AchievementText'

const AchievementItem: FC<{ item: IAchievement }> = ({ item }) => {
	return (
		<div className={s.item}>
			<Image
				width={120}
				height={120}
				src={`/img/achievement/${item.imagePath}`}
				alt={item.imagePath + 'icon'}
			/>
			<AchievementText item={item} />
		</div>
	)
}

export default AchievementItem
