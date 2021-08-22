import { Field, ObjectType } from '@nestjs/graphql';
import { IsBoolean } from 'class-validator';

@ObjectType()
export class PublisherFollow {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  avatar_link: string;

  @Field(() => String)
  idOwner: string;

  @IsBoolean()
  @Field()
  follow: boolean;
}
