import { Injectable } from '@nestjs/common';
import { User } from 'src/user/entities/user.entity';
import { CreatePublicationInput } from './dto/create-publication.input';
import { CreatePublisherInput } from './dto/create-publisher.input';
import { PublisherFollow } from './dto/search-response-publisher.input copy';
import { UpdatePublicationInput } from './dto/update-publication.input copy';
import { Publication } from './entities/publication.entity';
import { Publisher } from './entities/publisher.entity';
import { PublisherRepository } from './publisher-repository';
// import { UpdatePublisherInput } from './dto/update-publisher.input';

@Injectable()
export class PublisherService {
  constructor(private readonly publisherRepository: PublisherRepository) {}
  async create(createPublisherInput: CreatePublisherInput, user: User) {
    return await this.publisherRepository.createPublisher(
      createPublisherInput,
      user,
    );
  }

  async createPublication(
    createPublicationInput: CreatePublicationInput,
    user: User,
  ) {
    return await this.publisherRepository.createPublication(
      createPublicationInput,
      user,
    );
  }

  async followPublisher(user: User, followingId: string): Promise<Publisher[]> {
    return await this.publisherRepository.followPublisher(user, followingId);
  }

  async searchPublisher(
    user: User,
    pattern: string,
  ): Promise<PublisherFollow[]> {
    const { follow, publishers } =
      await this.publisherRepository.searchPublisher(user, pattern);
    const result: PublisherFollow[] = [];

    publishers.forEach((p) => {
      result.push({
        ...p,
        follow: follow.map((f: Publisher) => f.id).includes(p.id),
      });
    });

    return result;
  }

  async updatePublication(
    publication: UpdatePublicationInput,
  ): Promise<Publication> {
    return await this.publisherRepository.updatePub(publication);
  }
}
