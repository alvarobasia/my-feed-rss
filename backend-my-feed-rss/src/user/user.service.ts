import { Injectable } from '@nestjs/common';
import { CreateUser } from './dto/create-user.input';
import { User } from './entities/user.entity';
import { UserRepository } from './user-repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}
  async create(createUser: CreateUser): Promise<User> {
    return await this.userRepository.createUser(createUser);
  }

  // findAll() {
  //   return `This action returns all user`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // update(id: number, UpdateUser: UpdateUserInput) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
