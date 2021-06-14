import { Injectable } from '@nestjs/common';

import { Client } from 'pg';
import { CreateUser } from './dto/create-user.input';
import { User } from './entities/user.entity';
import { v4 as uuid } from 'uuid';
import { closeConnection, db } from 'db-connection';
@Injectable()
export class UserRepository {
  async createUser(user: CreateUser): Promise<User> {
    const id = uuid();
    const client = db();
    const text =
      'insert into users(id, name,email, password, username ) values ($1, $2, $3, $4, $5)';
    const values = [id, user.name, user.email, user.password, user.username];
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
}
