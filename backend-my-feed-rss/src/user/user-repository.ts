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

    console.log(rssLink);

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

  async deleteLink(rssLinkId: string, user: User): Promise<void> {
    const client = db();

    const text = 'delete from rsslinks where link=$1 and id_user=$2';
    const values = [rssLinkId, user.id];

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

  async followUser(follower: User, followingId: string): Promise<User[]> {
    const client = db();
    const id = uuid();
    const text =
      'insert into follow_user (id, id_following, id_follower) values ($1, $2, $3)';
    const values = [id, followingId, follower.id];
    await client.query(text, values);

    const result = await client.query(
      'SELECT * from users u inner join follow_user f on u.id = f.id_following where u.id in (select l.id_following from follow_user l where  l.id_follower = $1)',
      [follower.id],
    );

    await closeConnection();

    return result.rows;
  }

  async searchUser(
    user: User,
    pattern: string,
  ): Promise<{ user: User[]; follow: User[] }> {
    const client = db();
    const text = 'select * from users where name like $1';
    const values = [`%${pattern}%`];
    const users = await client.query(text, values);
    const textFollow =
      'SELECT * from users u inner join follow_user f on u.id = f.id_following where u.id in (select l.id_following from follow_user l where  l.id_follower = $1)';
    const valuesFollow = [user.id];
    const follow = await client.query(textFollow, valuesFollow);

    await closeConnection();

    return { user: users.rows, follow: follow.rows };
  }

  async updateUser(user: User): Promise<User> {
    const client = db();

    const text =
      'update users set name=$1, username=$2, email=$3, link_avatar=$4 where id=$5';
    const values = [
      user.name,
      user.username,
      user.email,
      user.link_avatar,
      user.id,
    ];
    await client.query(text, values);
    const result = await client.query('SELECT * from users where id=$1', [
      user.id,
    ]);
    await closeConnection();

    return result.rows[0];
  }

  async unfollow(user: User, id: string): Promise<User[]> {
    const client = db();

    const text = 'delete  from follow_user where id_following=$1';
    const values = [id];
    await client.query(text, values);
    const result = await client.query(
      'SELECT * from users u inner join follow_user f on u.id = f.id_following where u.id in (select l.id_following from follow_user l where  l.id_follower = $1)',
      [user.id],
    );
    await closeConnection();

    return result.rows;
  }
}
