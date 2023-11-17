import {
  Controller,
  Get,
  Put,
  Body,
  Patch,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CurrentUser } from 'src/auth/decorators/user.decorator';
import { AddAchievementDto, UserDto } from './user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('profile')
  @Auth()
  async getProfile(@CurrentUser('id') userId: string) {
    return await this.userService.getProfile(userId);
  }

  @Put('profile/update')
  @Auth()
  async updateProfile(@CurrentUser('id') userId: string, @Body() dto: UserDto) {
    return await this.userService.updateProfile(userId, dto);
  }

  @UsePipes(new ValidationPipe())
  @Patch('achievement')
  @Auth()
  async addAchievement(
    @CurrentUser('id') userId: string,
    @Body() dto: AddAchievementDto,
  ) {
    return this.userService.toggleAchievement(dto.name, userId);
  }
}
