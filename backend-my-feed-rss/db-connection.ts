import { Client } from 'pg';

export default class Database {
  private static client: Client | null = null;

  private constructor() {
    Database.client = new Client({
      user: 'postgres',
      host: 'localhost',
      database: 'MyFeedRSS',
      password: '12345',
      port: 5432,
    });
    Database.client.connect();
  }

  public static connection(): Client {
    if (!this.client) {
      new Database();
      return Database.client;
    } else {
      return Database.client;
    }
  }
}
