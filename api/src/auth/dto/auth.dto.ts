import { IsEmail, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @IsString()
  @MinLength(3, {
    message: "Мінімальна довжина ім'я - 3 символи",
  })
  firstName: string;

  @IsString()
  @MinLength(3, {
    message: 'Мінімальна довжина прізвища - 3 символи',
  })
  surName: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6, {
    message: 'Мінімальна довжина паролю - 6 символів',
  })
  password: string;

  @IsString()
  @MinLength(5, {
    message: 'Мінімальна довжина міста - 5 символів',
  })
  city: string;
}

export class LoginDto {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6, {
    message: 'Мінімальна довжина паролю - 6 символів',
  })
  password: string;
}
