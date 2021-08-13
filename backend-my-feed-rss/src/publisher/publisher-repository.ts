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

  //   async getUserByEmail(email: string): Promise<User> {
  //     const client = db();
  //     const text = 'select * from users where email=$1';
  //     const result = await client.query(text, [email]);

  //     await closeConnection();

  //     return result.rows[0];
  //   }

  //   async getUserById(id: string): Promise<User> {
  //     const client = db();
  //     const text = 'select * from users where id=$1';
  //     const result = await client.query(text, [id]);

  //     await closeConnection();

  //     return result.rows[0];
  //   }

  //   async createNewLink(rssLink: RssLink) {
  //     const client = db();

  //     const text =
  //       'insert into rsslinks(name, link, added_at, id_user) values ($1, $2, $3, $4)';
  //     const values = [
  //       rssLink.name,
  //       rssLink.link,
  //       rssLink.added_at,
  //       rssLink.user.id,
  //     ];

  //     await client.query(text, values);

  //     return;
  //   }

  //   async getAllUsers(): Promise<User[]> {
  //     const client = db();
  //     const text = 'select * from users';
  //     const result = await client.query(text);

  //     await closeConnection();

  //     return result.rows;
  //   }

  //   async followUser(follower: User, followingId: string): Promise<User[]> {
  //     const client = db();
  //     const id = uuid();
  //     const text =
  //       'insert into follow_user (id, id_following, id_follower) values ($1, $2, $3)';
  //     const values = [id, followingId, follower.id];
  //     await client.query(text, values);

  //     const result = await client.query(
  //       'SELECT * from users u inner join follow_user f on u.id = f.id_following where u.id in (select l.id_following from follow_user l where  l.id_follower = $1)',
  //       [follower.id],
  //     );

  //     await closeConnection();

  //     return result.rows;
  //   }
}
