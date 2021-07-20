import { Field, PartialType } from '@nestjs/graphql';
import { IsString } from 'class-validator';
import { AddLink } from './add-new-link.input';

export class UpdateLink extends PartialType(AddLink) {
  @IsString()
  @Field()
  link: string;

  @IsString()
  @Field()
  name: string;
}
