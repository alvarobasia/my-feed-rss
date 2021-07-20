import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class AddLink {
  @IsString()
  @Field()
  link: string;

  @IsString()
  @Field()
  name: string;
}
