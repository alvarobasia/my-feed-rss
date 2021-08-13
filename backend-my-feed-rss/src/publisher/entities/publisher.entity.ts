import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Publisher {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  avatarLink: string;

  @Field(() => String)
  idOwner: string;
}
