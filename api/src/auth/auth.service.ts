import {
  Injectable,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto, RegisterDto } from './dto/auth.dto';
import { User } from '@prisma/client';
import { hash, verify } from 'argon2';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
  ) {}

  async login(dto: LoginDto) {
    const user = await this.validateUser(dto);

    return {
      user: await this.getIdEmail(user),
      ...(await this.generateTokens(user.id)),
    };
  }

  async register(dto: RegisterDto) {
    const isExists = await this.checkIsExists(dto);

    if (isExists) {
      throw new UnauthorizedException('User already exists');
    }

    const user = await this.prisma.user.create({
      data: {
        firstName: dto.firstName,
        surName: dto.surName,
        email: dto.email,
        password: await hash(dto.password),
        city: dto.city,
        achievements: {
          connect: {
            name: 'Початківець',
          },
        },
      },
    });

    return {
      user: await this.getIdEmail(user),
      ...(await this.generateTokens(user.id)),
    };
  }

  async getTokens(refreshToken: string) {
    const result = await this.jwt.verifyAsync(refreshToken);
    if (!result) {
      throw new UnauthorizedException('Invalid refresh token');
    }

    const user = await this.prisma.user.findUnique({
      where: {
        id: result.id,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const tokens = await this.generateTokens(user.id);

    return {
      user: this.getIdEmail,
      ...tokens,
    };
  }

  private async checkIsExists(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (user) {
      return user;
    }

    return;
  }

  private async getIdEmail(user: User) {
    return {
      id: user.id,
      email: user.email,
    };
  }

  private async generateTokens(userId: string) {
    const data = { id: userId };

    const accessToken = this.jwt.sign(data, {
      expiresIn: '1h',
    });

    const refreshToken = this.jwt.sign(data, {
      expiresIn: '3d',
    });

    return { accessToken, refreshToken };
  }

  private async validateUser(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const isValidPassword = await verify(user.password, dto.password);

    if (!isValidPassword) {
      throw new UnauthorizedException('Something went wrong...');
    }

    return user;
  }
}
