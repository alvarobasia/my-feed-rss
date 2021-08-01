import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ElementFeed {
  @Field()
  title: string;

  @Field()
  link: string;

  @Field()
  isoDate: string;

  @Field()
  content: string;
}
