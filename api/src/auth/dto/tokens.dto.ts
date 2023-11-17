import { IsString } from 'class-validator';

export class TokensDto {
  @IsString()
  refreshToken: string;
}
