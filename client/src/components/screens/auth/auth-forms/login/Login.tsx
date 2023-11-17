import { FC } from 'react'
import s from './../auth-forms.module.scss'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TLoginSchema, loginSchema } from '@/libs/schemas/login.schema'
import Field from '@/components/ui/field/Field'
import Button from '@/components/ui/button/Button'
import { useRouter } from 'next/navigation'
import { ILogin } from '@/shared/interfaces/user.interface'
import { useActions } from '@/hooks/useActions'

const Login: FC = () => {
	const { login } = useActions()

	const {
		register: register,
		formState: { errors, isValid },
		reset,
		handleSubmit,
	} = useForm<TLoginSchema>({
		mode: 'onChange',
		resolver: zodResolver(loginSchema),
	})

	const { push } = useRouter()

	const onSubmit: SubmitHandler<ILogin> = data => {
		login(data)
		reset()

		push('/')
	}

	return (
		<div>
			<h1 className={s.title}>Вхід в обліковий запис</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Field
					{...register('email')}
					label="Електронна пошта"
					error={errors.email?.message}
					type="email"
					required
				/>
				<Field
					{...register('password')}
					label="Пароль"
					error={errors.password?.message}
					type="password"
					required
				/>
				<Button type="submit" disabled={!isValid}>
					Увійти
				</Button>
				<span className={s.link} onClick={() => push('?tab=register')}>
					Немає облікового запису? Зареєструватися
				</span>
			</form>
		</div>
	)
}
export default Login
