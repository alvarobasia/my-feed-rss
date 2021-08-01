import { Injectable } from '@nestjs/common';
import { User } from 'src/user/entities/user.entity';
import { getFeed } from 'src/utils/rss-parcer';
import { Feed } from './entities/feed.entity';
import { FeedRepository } from './feed-repository';

@Injectable()
export class FeedService {
  constructor(private readonly feedRepository: FeedRepository) {}
  async getUserFeed(user: User): Promise<Feed[]> {
    const links = await this.feedRepository.getAllLinksFromUser(user);
    return await getFeed(links);
  }
}
