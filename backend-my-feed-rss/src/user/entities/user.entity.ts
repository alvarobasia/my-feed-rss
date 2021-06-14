import { ObjectType, Field, ID, HideField } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  username: string;

  @HideField()
  password: string;

  @Field()
  email: string;
}
