import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { userFields } from './user.object';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getProfile(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: userFields,
    });

    return user;
  }

  async updateProfile(userId: string, dto: UserDto) {
    const isSameUser = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (isSameUser && isSameUser.id !== userId) {
      throw new BadRequestException('Email is already taken');
    }

    return await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        firstName: dto.firstName,
        surName: dto.surName,
        city: dto.city,
        avatarPath: dto.avatarPath,
        email: dto.email,
      },
      select: userFields,
    });
  }

  async toggleAchievement(achievementName: string, userId: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: userFields,
    });

    const isExists = user.achievements.some((a) => a.name === achievementName);

    return await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        achievements: {
          [isExists ? 'disconnect' : 'connect']: {
            name: achievementName,
          },
        },
      },
      select: userFields,
    });
  }
}
