import { Module } from '@nestjs/common';
import { PublisherService } from './publisher.service';
import { PublisherResolver } from './publisher.resolver';
import { PublisherRepository } from './publisher-repository';

@Module({
  providers: [PublisherResolver, PublisherService, PublisherRepository],
})
export class PublisherModule {}
