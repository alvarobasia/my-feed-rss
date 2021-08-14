import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUser } from './dto/create-user.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/auth.guard';
import { AddLink } from './dto/add-new-link.input';
import { RssLink } from './entities/rsslink.entity';
import { UserContext } from 'src/decorators/user-decorator';
import { AddUserFollow } from './dto/add_user-follow-dto';
import { UserFollow } from './dto/search-response-user.input copy';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  async createUser(@Args('createUser') createUserInput: CreateUser) {
    return await this.userService.create(createUserInput);
  }

  @Query(() => User)
  async getUserByEmail(@Args('email') email: string): Promise<User> {
    return await this.userService.getUserByEmail(email);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [User])
  async getAllUsers(): Promise<User[]> {
    return await this.userService.getAllUsers();
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => RssLink)
  async addLink(
    @Args('addLink') link: AddLink,
    @UserContext() user: User,
  ): Promise<RssLink> {
    const rss = await this.userService.createNewLink(link, user);
    return rss;
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => [User])
  async followUser(
    @Args('id') userFollow: AddUserFollow,
    @UserContext() user: User,
  ): Promise<User[]> {
    return await this.userService.followUser(user, userFollow.id);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [RssLink])
  async getUserLinks(@UserContext() user: User): Promise<RssLink[]> {
    return await this.userService.getUserLinks(user);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [UserFollow])
  async searchUser(
    @UserContext() user: User,
    @Args('pattern') pattern: string,
  ): Promise<UserFollow[]> {
    return await this.userService.searchUser(user, pattern);
  }
}
