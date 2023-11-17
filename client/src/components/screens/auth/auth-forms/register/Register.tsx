import { TRegisterSchema, registerSchema } from '@/libs/schemas/register.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import s from './../auth-forms.module.scss'
import Field from '@/components/ui/field/Field'
import Button from '@/components/ui/button/Button'
import { useRouter } from 'next/navigation'
import { ICreateUser } from '@/shared/interfaces/user.interface'
import { useActions } from '@/hooks/useActions'

const Register: FC = () => {
	const { register } = useActions()

	const {
		register: formRegister,
		formState: { errors, isValid },
		reset,
		handleSubmit,
	} = useForm<TRegisterSchema>({
		mode: 'onChange',
		resolver: zodResolver(registerSchema),
	})
	const { push } = useRouter()

	const onSubmit: SubmitHandler<ICreateUser> = data => {
		register(data)
		reset()

		push('/')
	}

	return (
		<div>
			<h1 className={s.title}>Створити обліковий запис</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Field
					{...formRegister('firstName')}
					label="Ім'я"
					error={errors.firstName?.message}
					type="text"
					required
				/>
				<Field
					{...formRegister('surName')}
					label="Прізвище"
					error={errors.surName?.message}
					type="text"
					required
				/>
				<Field
					{...formRegister('email')}
					label="Електронна пошта"
					error={errors.email?.message}
					type="email"
					required
				/>
				<Field
					{...formRegister('city')}
					label="Місто"
					error={errors.city?.message}
					type="text"
					required
				/>

				<Field
					{...formRegister('password')}
					label="Пароль"
					error={errors.password?.message}
					type="password"
					required
				/>
				<Button type="submit" disabled={!isValid}>
					Створити
				</Button>
				<span className={s.link} onClick={() => push('?tab=login')}>
					Вже маєте обліковий запис? Увійти
				</span>
			</form>
		</div>
	)
}
export default Register
