import { Module } from '@nestjs/common';
import { FeedService } from './feed.service';
import { FeedResolver } from './feed.resolver';
import { FeedRepository } from './feed-repository';

@Module({
  providers: [FeedResolver, FeedService, FeedRepository],
})
export class FeedModule {}
