import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Publication {
  @Field(() => String)
  id: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  content: string;

  @Field(() => String)
  idPublisher: string;

  @Field(() => String)
  idUser: string;
}
