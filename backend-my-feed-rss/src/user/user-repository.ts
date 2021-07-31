import { Injectable } from '@nestjs/common';

import { CreateUser } from './dto/create-user.input';
import { User } from './entities/user.entity';
import { v4 as uuid } from 'uuid';
import { closeConnection, db } from 'db-connection';
import { RssLink } from './entities/rsslink.entity';
@Injectable()
export class UserRepository {
  async createUser(user: CreateUser): Promise<User> {
    const id = uuid();
    const client = db();
    const text =
      'insert into users(id, name,email, password, username, link_avatar ) values ($1, $2, $3, $4, $5, $6)';
    const values = [
      id,
      user.name,
      user.email,
      user.password,
      user.username,
      user.link_avatar,
    ];
    await client.query(text, values);
    const result = await client.query('SELECT * from users where id=$1', [id]);

    await closeConnection();

    return result.rows[0];
  }

  async getUserByEmail(email: string): Promise<User> {
    const client = db();
    const text = 'select * from users where email=$1';
    const result = await client.query(text, [email]);

    await closeConnection();

    return result.rows[0];
  }

  async getUserById(id: string): Promise<User> {
    const client = db();
    const text = 'select * from users where id=$1';
    const result = await client.query(text, [id]);

    await closeConnection();

    return result.rows[0];
  }

  async createNewLink(rssLink: RssLink) {
    const client = db();

    const text =
      'insert into rsslinks(name, link, added_at, id_user) values ($1, $2, $3, $4)';
    const values = [
      rssLink.name,
      rssLink.link,
      rssLink.added_at,
      rssLink.user.id,
    ];

    await client.query(text, values);

    return;
  }

  async getAllUsers(): Promise<User[]> {
    const client = db();
    const text = 'select * from users';
    const result = await client.query(text);

    await closeConnection();

    return result.rows;
  }
}
