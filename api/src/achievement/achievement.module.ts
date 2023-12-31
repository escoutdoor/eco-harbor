import { Module } from '@nestjs/common';
import { AchievementService } from './achievement.service';
import { AchievementController } from './achievement.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [AchievementController],
  providers: [AchievementService, PrismaService],
})
export class AchievementModule {}
