import { Injectable } from '@nestjs/common';
import Database from 'db-connection';
import { Client } from 'pg';
import { CreateUser } from './dto/create-user.input';
import { User } from './entities/user.entity';
import { v4 as uuid } from 'uuid';
@Injectable()
export class UserRepository {
  async createUser(user: CreateUser): Promise<User> {
    const id = uuid();
    const client: Client = Database.connection();
    const text =
      'insert into users(id, name,email, password, username ) values ($1, $2, $3, $4, $5)';
    const values = [id, user.name, user.email, user.password, user.username];
    await client.query(text, values);
    const result = await client.query('SELECT * from users where id=$1', [id]);

    client.end();

    return result.rows[0];
  }
}
