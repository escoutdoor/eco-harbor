import { FC } from 'react'
import s from './auth.module.scss'
import AuthForms from './auth-forms/AuthForms'

const Auth: FC = () => {
	return (
		<div className={s.authWrapper}>
			<AuthForms />
		</div>
	)
}
export default Auth
