import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { comparePassword } from 'src/utils/compare-password';
import { AuthInput } from './dto/auth.input';
import { AuthType } from './dto/auth.type';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwt: JwtService,
  ) {}

  async validateUser(data: AuthInput): Promise<AuthType> {
    const user = await this.userService.getUserByEmail(data.email);
    const isValid = await comparePassword(data.password, user.password);

    if (!isValid) {
      throw new UnauthorizedException('senha incorreta');
    }

    const token = await this.jwtToken(user);

    return {
      user,
      token,
    };
  }

  private async jwtToken(user: User): Promise<string> {
    const payload = { usernane: user.username, name: user.name, sub: user.id };
    return await this.jwt.signAsync(payload);
  }
}
