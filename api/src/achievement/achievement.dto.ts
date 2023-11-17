import { IsOptional, IsString, MinLength } from 'class-validator';

export class AchievementDto {
  @IsString()
  @MinLength(3, {
    message: 'Мінімальна довжина назви - 3 символи',
  })
  name: string;

  @IsString()
  @MinLength(3, {
    message: 'Мінімальна довжина опису - 3 символи',
  })
  description: string;

  @IsString()
  imagePath: string;
}
