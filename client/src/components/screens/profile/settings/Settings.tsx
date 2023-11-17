'use client'
import { SubmitHandler, useForm } from 'react-hook-form'
import s from './settings.module.scss'
import { zodResolver } from '@hookform/resolvers/zod'
import { updateProfileSchema } from '@/libs/schemas/update-profile.schema'
import { IChangeUser } from '@/shared/interfaces/user.interface'
import Field from '@/components/ui/field/Field'
import { useUpdateProfile } from '@/hooks/useUpdateProfile'
import { useProfile } from '@/hooks/useProfile'

const Settings = () => {
	const { profile } = useProfile()
	const { updateProfile } = useUpdateProfile()

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<IChangeUser>({
		mode: 'onChange',
		resolver: zodResolver(updateProfileSchema),
		values: {
			...profile,
		},
	})

	const onSubmit: SubmitHandler<IChangeUser> = data => {
		updateProfile(data)
	}

	return (
		<div className={s.setting}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Field
					{...register('firstName')}
					label="Ім'я"
					error={errors.firstName?.message}
					type="text"
					required
				/>
				<Field
					{...register('surName')}
					label="Прізвище"
					error={errors.surName?.message}
					type="text"
					required
				/>
				<Field
					{...register('email')}
					label="Електронна пошта"
					error={errors.email?.message}
					type="email"
					required
				/>
				<Field
					{...register('city')}
					label="Місто"
					error={errors.city?.message}
					type="text"
					required
				/>
				<div>
					<button
						type="submit"
						className={s.button}
						disabled={!isValid}
					>
						Зберегти налаштування
					</button>
				</div>
			</form>
		</div>
	)
}
export default Settings
