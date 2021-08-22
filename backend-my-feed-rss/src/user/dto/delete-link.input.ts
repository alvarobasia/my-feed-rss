import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class DeleteLink {
  @Field(() => String)
  link: string;
}
