import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class SearchUser {
  @Field(() => String)
  pattern: string;
}
