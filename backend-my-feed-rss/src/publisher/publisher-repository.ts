import { Injectable } from '@nestjs/common';

import { v4 as uuid } from 'uuid';
import { closeConnection, db } from 'db-connection';
import { CreatePublisherInput } from './dto/create-publisher.input';
import { Publisher } from './entities/publisher.entity';
import { User } from 'src/user/entities/user.entity';
import { CreatePublicationInput } from './dto/create-publication.input';
import { Publication } from './entities/publication.entity';
import { UpdatePublicationInput } from './dto/update-publication.input copy';

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

    await closeConnection();

    return { publishers: publishers.rows, follow: follow.rows };
  }

  async updatePub(
    publicationUpdate: UpdatePublicationInput,
  ): Promise<Publication> {
    const client = db();
    const result = await client.query('select * from publication where id=$1', [
      publicationUpdate.id,
    ]);
    const pub = result.rows[0];

    const text =
      'update publication set title=$1, description=$2, content=$3 where id=$4';
    const values = [
      publicationUpdate.title,
      publicationUpdate.description,
      publicationUpdate.content,
      pub.id,
    ];
    await client.query(text, values);

    const final = await client.query('select * from publication where id=$1', [
      publicationUpdate.id,
    ]);
    await closeConnection();

    return final.rows[0];
  }

  async unfollow(user: User, id: string): Promise<Publisher[]> {
    const client = db();

    const text = 'delete from follow_publisher where id_publisher=$1';
    const values = [id];
    await client.query(text, values);
    const result = await client.query(
      'SELECT p.* from publisher p, follow_publisher f where p.id = f.id_publisher and f.id_user = $1',
      [user.id],
    );
    await closeConnection();

    return result.rows;
  }

  async getUserPub(user: User): Promise<Publisher> {
    const client = db();

    const text = 'select * from publisher where id_owner=$1';
    const values = [user.id];
    const result = await client.query(text, values);

    await closeConnection();

    return result.rows[0];
  }

  async getPublications(publiId: string): Promise<Publication[]> {
    const client = db();

    const text = 'select * from publication where id_publisher=$1';
    const values = [publiId];
    const result = await client.query(text, values);

    await closeConnection();

    return result.rows;
  }
}
