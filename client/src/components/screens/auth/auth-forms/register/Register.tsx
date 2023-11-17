import { TRegisterSchema, registerSchema } from '@/libs/schemas/register.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import s from './../auth-forms.module.scss'
import Field from '@/components/ui/field/Field'
import Button from '@/components/ui/button/Button'
import { useRouter } from 'next/navigation'

const Register: FC = () => {
	const {
		register: register,
		formState: { errors, isValid },
		reset,
		handleSubmit,
	} = useForm<TRegisterSchema>({
		mode: 'onChange',
		resolver: zodResolver(registerSchema),
	})
	const { push } = useRouter()
	return (
		<div>
			<h1 className={s.title}>Створити обліковий запис</h1>
			<form>
				<Field
					{...register('firstName')}
					label="Ім'я"
					error={errors.firstName?.message}
					type='password'
					required
				/>
				<Field
					{...register('surName')}
					label='Фамілія'
					error={errors.surName?.message}
					type='password'
					required
				/>
				<Field
					{...register('email')}
					label='Електронна пошта'
					error={errors.email?.message}
					type='email'
					required
				/>
				<Field
					{...register('city')}
					label='Місто'
					error={errors.city?.message}
					type='password'
					required
				/>

				<Field
					{...register('password')}
					label='Password'
					error={errors.password?.message}
					type='password'
					required
				/>
				<Button type='submit' disabled={!isValid}>
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
