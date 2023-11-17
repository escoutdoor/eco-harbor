import s from './achievement-text.module.scss'
import { IAchievement } from '@/shared/interfaces/achievement.interface'
import { FC } from 'react'

const AchievementText: FC<{ item: IAchievement }> = ({ item }) => {
	return (
		<div className={s.text}>
			<h1 className={s.title}>{item.name}</h1>
			<p className={s.description}>{item.description}</p>
		</div>
	)
}

export default AchievementText
