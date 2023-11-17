import { NextPage } from 'next'
import Image from 'next/image'
import s from './loading.module.scss'

const Loading: NextPage = () => {
	return (
		<div className={s.loader}>
			<Image
				src={'/img/loader.gif'}
				width={0}
				height={0}
				sizes="100vw"
				alt="loading"
			/>
		</div>
	)
}

export default Loading
