import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { UserRepository } from './user-repository';
import { FeedModule } from 'src/feed/feed.module';

@Module({
  providers: [UserResolver, UserService, UserRepository],
  imports: [FeedModule],
})
export class UserModule {}
