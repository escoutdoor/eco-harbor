import s from './achievements.module.scss'
import { IAchievement } from '@/shared/interfaces/achievement.interface'
import { FC } from 'react'
import AchievementItem from './achievement-item/AchievementItem'

const Achievements: FC<{ achievements: IAchievement[] }> = ({
	achievements,
}) => {
	return (
		<div className={s.page}>
			<h1 className={s.title}>Нагороди</h1>

			<div className={s.achievements}>
				{achievements.map(item => (
					<AchievementItem key={item.id} item={item} />
				))}
			</div>
		</div>
	)
}

export default Achievements
