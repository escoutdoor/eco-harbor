import { z } from 'zod'

export const registerSchema = z.object({
	email: z.string().email({
		message: 'Введіть коректну адресу електронної пошти',
	}),
	password: z.string().min(6, {
		message: 'Пароль має бути не менше 6 символів',
	}),
	firstName: z
		.string()
		.min(2, {
			message: "Ім'я має бути не менше 2 символів",
		})
		.max(50, {
			message: "Ім'я має бути не більше 50 символів",
		}),
	surName: z
		.string()
		.min(2, {
			message: 'Фамілія має бути не менше 2 символів',
		})
		.max(50, {
			message: 'Фамілія має бути не більше 50 символів',
		}),
	city: z
		.string()
		.min(2, {
			message: 'Місто має бути не менше 2 символів',
		})
		.max(50, {
			message: 'Місто має бути не більше 50 символів',
		}),
})

export type TRegisterSchema = z.infer<typeof registerSchema>
