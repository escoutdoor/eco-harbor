import { z } from 'zod'

export const updateProfileSchema = z.object({
	email: z.string().email({
		message: 'Введіть коректну адресу електронної пошти',
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
		.min(5, {
			message: 'Місто має бути не менше 5 символів',
		})
		.max(50, {
			message: 'Місто має бути не більше 50 символів',
		}),
})
