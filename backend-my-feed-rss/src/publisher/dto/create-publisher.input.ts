import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePublisherInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  avatarLink: string;
}
