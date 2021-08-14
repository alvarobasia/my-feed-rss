import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class SearchPublisher {
  @Field(() => String)
  pattern: string;
}
