'use client'
import { FC } from 'react'
import s from './auth-forms.module.scss'
import { useSearchParams } from 'next/navigation'
import Login from './login/Login'
import Register from './register/Register'

const AuthForms: FC = () => {
	const { get } = useSearchParams()

	const tab = get('tab') ?? 'login'
	return (
		<div className={s.forms}>{tab === 'login' ? <Login /> : <Register />}</div>
	)
}
export default AuthForms
