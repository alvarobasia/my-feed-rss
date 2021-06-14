import { Client } from 'pg';
let client: Client | null = null;
export const db = () => {
  if (!client) {
    client = new Client({
      user: 'postgres',
      host: 'localhost',
      database: 'MyFeedRSS',
      password: '12345',
      port: 5432,
    });
    client.connect();
  }
  return client;
};

export const closeConnection = async () => {
  if (client) {
    await client.end();
    client = null;
  }
};
