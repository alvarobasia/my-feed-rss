import { Injectable } from '@nestjs/common';
import { User } from 'src/user/entities/user.entity';
import { CreatePublicationInput } from './dto/create-publication.input';
import { CreatePublisherInput } from './dto/create-publisher.input';
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

  // findAll() {
  //   return `This action returns all publisher`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} publisher`;
  // }

  // update(id: number, updatePublisherInput: UpdatePublisherInput) {
  //   return `This action updates a #${id} publisher`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} publisher`;
}
// }
