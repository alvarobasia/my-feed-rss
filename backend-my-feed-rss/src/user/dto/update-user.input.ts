import { CreateUser } from './create-user.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { Contains, IsString, MaxLength, IsNumber } from 'class-validator';

@InputType()
export class UpdateUser extends PartialType(CreateUser) {
  @IsNumber()
  @MaxLength(30)
  @Field()
  id: number;

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
