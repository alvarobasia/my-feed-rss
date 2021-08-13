import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePublicationInput {
  @Field(() => String)
  title: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  content: string;

  @Field(() => String)
  idPublisher: string;
}
