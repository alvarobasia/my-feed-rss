import { Injectable, NotFoundException } from '@nestjs/common';
import { hashPassword } from 'src/utils/hash-password';
import { CreateUser } from './dto/create-user.input';
import { User } from './entities/user.entity';
import { UserRepository } from './user-repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}
  async create(createUser: CreateUser): Promise<User> {
    const hashedPassword = await hashPassword(createUser.password);
    const userWithHashPassword: CreateUser = {
      ...createUser,
      password: hashedPassword,
    };
    return await this.userRepository.createUser(userWithHashPassword);
  }

  async getUserByEmail(email: string): Promise<User> {
    const user = await this.userRepository.getUserByEmail(email);
    if (!user) {
      throw new NotFoundException('usuário não encontrado');
    }
    return user;
  }
}
