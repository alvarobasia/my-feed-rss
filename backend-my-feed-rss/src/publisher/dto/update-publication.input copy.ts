import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdatePublicationInput {
  @Field(() => String)
  id: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  content: string;
}
