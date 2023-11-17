import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { AchievementDto } from './achievement.dto';
import { achievementFields } from './achievement.object';

@Injectable()
export class AchievementService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return await this.prisma.achievement.findMany();
  }

  async createAchievement(dto: AchievementDto) {
    return await this.prisma.achievement.create({
      data: {
        name: dto.name,
        description: dto.description,
        imagePath: dto.imagePath,
      },
      select: achievementFields,
    });
  }

  async updateAchievement(dto: AchievementDto) {
    return await this.prisma.achievement.update({
      where: {
        name: dto.name,
      },
      data: {
        name: dto.name,
        description: dto.description,
        imagePath: dto.imagePath,
      },
    });
  }
}
