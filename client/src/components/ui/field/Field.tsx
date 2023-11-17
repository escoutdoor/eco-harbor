import { InputHTMLAttributes, forwardRef } from 'react'
import s from './field.module.scss'
import ErrorText from './error-text/ErrorText'

interface IField
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {
	label?: string
	error?: string
	required?: boolean
}

const Field = forwardRef<HTMLInputElement, IField>(function Comp(
	{ label, error, required, ...rest },
	ref
) {
	return (
		<div className={s.field}>
			<label>
				<h1 className={s.title}>{label}</h1>
				{required && <sup className={s.required}>*</sup>}
			</label>
			<input className={s.input} {...rest} ref={ref} />

			{error && <ErrorText>{error}</ErrorText>}
		</div>
	)
})
export default Field
