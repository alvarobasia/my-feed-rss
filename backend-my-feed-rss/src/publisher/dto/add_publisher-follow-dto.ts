import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class AddPublisherFollow {
  @IsString()
  @Field()
  id: string;
}
