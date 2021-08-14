import { Injectable } from '@nestjs/common';

import { v4 as uuid } from 'uuid';
import { closeConnection, db } from 'db-connection';
import { CreatePublisherInput } from './dto/create-publisher.input';
import { Publisher } from './entities/publisher.entity';
import { User } from 'src/user/entities/user.entity';
import { CreatePublicationInput } from './dto/create-publication.input';
import { Publication } from './entities/publication.entity';

@Injectable()
export class PublisherRepository {
  async createPublisher(
    publisher: CreatePublisherInput,
    user: User,
  ): Promise<Publisher> {
    const id = uuid();
    const client = db();
    const text =
      'insert into publisher(id, name, avatar_link, id_owner ) values ($1, $2, $3, $4)';
    const values = [id, publisher.name, publisher.avatarLink, user.id];
    await client.query(text, values);
    const result = await client.query('SELECT * from publisher where id=$1', [
      id,
    ]);

    await closeConnection();

    return result.rows[0];
  }

  async createPublication(
    publication: CreatePublicationInput,
    user: User,
  ): Promise<Publication> {
    const id = uuid();
    const client = db();
    const text =
      'insert into publication(id, title, description, content, id_publisher, id_user ) values ($1, $2, $3, $4,$5,$6)';
    const values = [
      id,
      publication.title,
      publication.description,
      publication.content,
      publication.idPublisher,
      user.id,
    ];
    await client.query(text, values);
    const result = await client.query('SELECT * from publication where id=$1', [
      id,
    ]);

    await closeConnection();

    return result.rows[0];
  }

  async followPublisher(
    follower: User,
    followingId: string,
  ): Promise<Publisher[]> {
    const client = db();
    const id = uuid();
    const text =
      'insert into follow_publisher (id, id_publisher, id_user) values ($1, $2, $3)';
    const values = [id, followingId, follower.id];
    await client.query(text, values);

    const result = await client.query(
      'SELECT p.* from publisher p, follow_publisher f where p.id = f.id_publisher and f.id_user = $1',
      [follower.id],
    );

    await closeConnection();

    return result.rows;
  }

  async searchPublisher(
    user: User,
    pattern: string,
  ): Promise<{ publishers: Publisher[]; follow: Publisher[] }> {
    const client = db();
    const text = 'select * from publisher where name like $1';
    const values = [`%${pattern}%`];
    const publishers = await client.query(text, values);
    const textFollow =
      'SELECT p.* from publisher p, follow_publisher f where p.id = f.id_publisher and f.id_user = $1';
    const valuesFollow = [user.id];
    const follow = await client.query(textFollow, valuesFollow);
    console.log(publishers);

    await closeConnection();

    return { publishers: publishers.rows, follow: follow.rows };
  }
}
