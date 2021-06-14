import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { comparePassword } from 'src/utils/compare-password';
import { AuthInput } from './dto/auth.input';
import { AuthType } from './dto/auth.type';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async validateUser(data: AuthInput): Promise<AuthType> {
    const user = await this.userService.getUserByEmail(data.email);
    const isValid = await comparePassword(data.password, user.password);

    if (!isValid) {
      throw new UnauthorizedException('senha incorreta');
    }

    return {
      user,
      token: '',
    };
  }
}
