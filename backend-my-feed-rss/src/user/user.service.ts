import { Injectable, NotFoundException } from '@nestjs/common';
import { FeedRepository } from 'src/feed/feed-repository';
import { hashPassword } from 'src/utils/hash-password';
import { AddLink } from './dto/add-new-link.input';
import { CreateUser } from './dto/create-user.input';
import { RssLink } from './entities/rsslink.entity';
import { User } from './entities/user.entity';
import { UserRepository } from './user-repository';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly feedRepository: FeedRepository,
  ) {}
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

  async getUserById(id: string): Promise<User> {
    const user = await this.userRepository.getUserById(id);
    if (!user) {
      throw new NotFoundException('usuário não encontrado');
    }
    return user;
  }

  async getAllUsers(): Promise<User[]> {
    return await this.userRepository.getAllUsers();
  }

  async createNewLink(link: AddLink, user: User): Promise<RssLink> {
    const rss = RssLink.toEntity(link, user);
    await this.userRepository.createNewLink(rss);
    return rss;
  }

  async getUserLinks(user: User): Promise<RssLink[]> {
    return await this.feedRepository.getAllLinksFromUser(user);
  }
}
