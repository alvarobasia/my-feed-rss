import { Field, ObjectType } from '@nestjs/graphql';
import { AddLink } from '../dto/add-new-link.input';
import { User } from './user.entity';

@ObjectType()
export class RssLink {
  @Field()
  link: string;

  @Field()
  added_at: Date;

  @Field()
  name: string;

  @Field()
  user: User;

  static toEntity(newLink: AddLink, user: User): RssLink {
    const rss = new RssLink();
    rss.name = newLink.name;
    rss.added_at = new Date();
    rss.user = user;
    rss.link = newLink.link;
    return rss;
  }
}
