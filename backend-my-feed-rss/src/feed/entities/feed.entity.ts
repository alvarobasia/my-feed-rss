import { ObjectType, Field } from '@nestjs/graphql';
import { RssLink } from 'src/user/entities/rsslink.entity';
import { ElementFeed } from './element.entity';

@ObjectType()
export class Feed {
  @Field(() => [ElementFeed])
  elements: ElementFeed[];

  @Field(() => RssLink)
  rssLink: RssLink;
}
