import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class AddUserFollow {
  @IsString()
  @Field()
  id: string;
}
