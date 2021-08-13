import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PublisherService } from './publisher.service';
import { Publisher } from './entities/publisher.entity';
import { CreatePublisherInput } from './dto/create-publisher.input';
import { UserContext } from 'src/decorators/user-decorator';
import { User } from 'src/user/entities/user.entity';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/auth.guard';
import { CreatePublicationInput } from './dto/create-publication.input';
// import { UpdatePublisherInput } from './dto/update-publisher.input';

@Resolver(() => Publisher)
export class PublisherResolver {
  constructor(private readonly publisherService: PublisherService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Publisher)
  async createPublisher(
    @UserContext() user: User,
    @Args('createPublisherInput') createPublisherInput: CreatePublisherInput,
  ) {
    return await this.publisherService.create(createPublisherInput, user);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Publisher)
  async createPublication(
    @UserContext() user: User,
    @Args('createPublicationInput')
    createPublicationInput: CreatePublicationInput,
  ) {
    return await this.publisherService.createPublication(
      createPublicationInput,
      user,
    );
  }

  // @Query(() => [Publisher], { name: 'publisher' })
  // findAll() {
  //   return this.publisherService.findAll();
  // }

  // @Query(() => Publisher, { name: 'publisher' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.publisherService.findOne(id);
  // }

  // @Mutation(() => Publisher)
  // updatePublisher(@Args('updatePublisherInput') updatePublisherInput: UpdatePublisherInput) {
  //   return this.publisherService.update(updatePublisherInput.id, updatePublisherInput);
  // }

  // @Mutation(() => Publisher)
  // removePublisher(@Args('id', { type: () => Int }) id: number) {
  //   return this.publisherService.remove(id);
  // }
}
