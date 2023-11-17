import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class UserDto {
  @IsString()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  @MinLength(2, {
    message: "Мінімальна довжина ім'я - 3 символи",
  })
  firstName: string;

  @IsOptional()
  @IsString()
  @MinLength(2, {
    message: 'Мінімальна довжина прізвища - 3 символи',
  })
  surName: string;

  @IsOptional()
  @IsString()
  avatarPath: string;

  @IsOptional()
  @IsString()
  @MinLength(5, {
    message: 'Мінімальна довжина міста - 5 символів',
  })
  city: string;
}

export class AddAchievementDto {
  @IsString()
  @MinLength(3, {
    message: 'Мінімальна довжина назви - 3 символи',
  })
  name: string;
}
