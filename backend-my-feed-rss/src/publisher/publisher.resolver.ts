import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PublisherService } from './publisher.service';
import { Publisher } from './entities/publisher.entity';
import { CreatePublisherInput } from './dto/create-publisher.input';
import { UserContext } from 'src/decorators/user-decorator';
import { User } from 'src/user/entities/user.entity';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/auth.guard';
import { CreatePublicationInput } from './dto/create-publication.input';
import { AddPublisherFollow } from './dto/add_publisher-follow-dto';
import { PublisherFollow } from './dto/search-response-publisher.input copy';
import { Publication } from './entities/publication.entity';
import { UpdatePublicationInput } from './dto/update-publication.input copy';
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
  @Mutation(() => Publication)
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

  @UseGuards(GqlAuthGuard)
  @Mutation(() => [Publisher])
  async followPublisher(
    @Args('id') publisherFollow: AddPublisherFollow,
    @UserContext() user: User,
  ): Promise<Publisher[]> {
    return await this.publisherService.followPublisher(
      user,
      publisherFollow.id,
    );
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [PublisherFollow])
  async searchPublisher(
    @UserContext() user: User,
    @Args('pattern') pattern: string,
  ): Promise<PublisherFollow[]> {
    return await this.publisherService.searchPublisher(user, pattern);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Publication)
  async updatePub(
    @Args('publication') publication: UpdatePublicationInput,
  ): Promise<Publication> {
    return await this.publisherService.updatePublication(publication);
  }
}
