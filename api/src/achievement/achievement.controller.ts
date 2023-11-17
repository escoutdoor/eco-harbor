import {
  Controller,
  Get,
  Post,
  HttpCode,
  Put,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AchievementService } from './achievement.service';
import { AchievementDto } from './achievement.dto';

@Controller('achievements')
export class AchievementController {
  constructor(private readonly achievementService: AchievementService) {}

  @Get()
  async getAll() {
    return await this.achievementService.getAll();
  }

  @Post()
  @HttpCode(200)
  async createAchievement(@Body() dto: AchievementDto) {
    return await this.achievementService.createAchievement(dto);
  }

  @UsePipes(new ValidationPipe())
  @Put()
  @HttpCode(200)
  async updateAchievement(@Body() dto: AchievementDto) {
    return await this.achievementService.updateAchievement(dto);
  }
}
