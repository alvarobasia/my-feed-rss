import { InputType, Field, ObjectType } from '@nestjs/graphql';
import { MaxLength, IsString, Contains, IsBoolean } from 'class-validator';

@ObjectType()
export class UserFollow {
  @IsString()
  @MaxLength(30)
  @Field()
  id: string;

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

  @IsBoolean()
  @Field()
  follow: boolean;
}
