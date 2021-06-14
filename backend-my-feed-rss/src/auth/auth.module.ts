import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { UserService } from 'src/user/user.service';
import { UserRepository } from 'src/user/user-repository';

@Module({
  providers: [AuthService, AuthResolver, UserService, UserRepository],
})
export class AuthModule {}
