import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'
import s from './button.module.scss'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	disabled?: boolean
}

const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	disabled,
	...rest
}) => {
	return (
		<button className={s.button} {...rest} disabled={disabled}>
			{children}
		</button>
	)
}
export default Button
