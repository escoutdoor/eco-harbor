import React, { FC } from 'react'
import s from './error-text.module.scss'
import Image from 'next/image'

const ErrorText: FC<
	React.HTMLAttributes<HTMLDivElement> & { children: string | undefined }
> = ({ children, ...rest }) => {
	return (
		<>
			{children && (
				<div className={s.error} {...rest}>
					<Image src={'/images/warning.svg'} width={24} height={24} alt='' />
					<span className={s.text}>{children}</span>
				</div>
			)}
		</>
	)
}
export default ErrorText
