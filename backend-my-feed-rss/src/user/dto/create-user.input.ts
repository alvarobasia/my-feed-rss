import { InputType, Field } from '@nestjs/graphql';
import { MaxLength, IsString, Contains } from 'class-validator';

@InputType()
export class CreateUser {
  @IsString()
  @MaxLength(30)
  @Field()
  name: string;

  @IsString()
  @MaxLength(30)
  @Field()
  username: string;

  @IsString()
  @Contains('@')
  @Field()
  email: string;

  @IsString()
  @Field()
  password: string;

  @IsString()
  @Field()
  link_avatar: string;
}
