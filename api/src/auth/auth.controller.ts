import {
  Controller,
  Post,
  HttpCode,
  ValidationPipe,
  UsePipes,
  Body,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto/auth.dto';
import { TokensDto } from './dto/tokens.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UsePipes(new ValidationPipe())
  @Post('login')
  @HttpCode(200)
  async login(@Body() dto: LoginDto) {
    return await this.authService.login(dto);
  }

  @UsePipes(new ValidationPipe())
  @Post('register')
  @HttpCode(200)
  async register(@Body() dto: RegisterDto) {
    return await this.authService.register(dto);
  }

  @UsePipes(new ValidationPipe())
  @Post('access-token')
  @HttpCode(200)
  async getTokens(@Body() dto: TokensDto) {
    return await this.authService.getTokens(dto.refreshToken);
  }
}
