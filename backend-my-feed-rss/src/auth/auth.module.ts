import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { UserService } from 'src/user/user.service';
import { UserRepository } from 'src/user/user-repository';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { FeedModule } from 'src/feed/feed.module';

@Module({
  imports: [
    FeedModule,
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.JWT_SECRET,
        signOptions: {
          expiresIn: '30m',
        },
      }),
    }),
  ],
  providers: [
    AuthService,
    AuthResolver,
    UserService,
    UserRepository,
    JwtStrategy,
  ],
})
export class AuthModule {}
