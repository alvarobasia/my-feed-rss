import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUser } from './dto/create-user.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/auth.guard';

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

  // @Query(() => User, { name: 'user' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.userService.findOne(id);
  // }

  // @Mutation(() => User)
  // updateUser(@Args('UpdateUser') updateUserInput: UpdateUserInput) {
  //   return this.userService.update(updateUserInput.id, updateUserInput);
  // }

  // @Mutation(() => User)
  // removeUser(@Args('id', { type: () => Int }) id: number) {
  //   return this.userService.remove(id);
  // }
}
