import { Resolver, Query } from '@nestjs/graphql';
import { FeedService } from './feed.service';
import { Feed } from './entities/feed.entity';
import { GqlAuthGuard } from 'src/auth/auth.guard';
import { UseGuards } from '@nestjs/common';
import { UserContext } from 'src/decorators/user-decorator';
import { User } from 'src/user/entities/user.entity';

@Resolver(() => Feed)
export class FeedResolver {
  constructor(private readonly feedService: FeedService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => [Feed], { name: 'getFeed' })
  async getFeed(@UserContext() user: User) {
    return await this.feedService.getUserFeed(user);
  }
}
