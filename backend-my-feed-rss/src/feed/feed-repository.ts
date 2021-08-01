import { Injectable } from '@nestjs/common';
import { closeConnection, db } from 'db-connection';
import { RssLink } from 'src/user/entities/rsslink.entity';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class FeedRepository {
  async getAllLinksFromUser(user: User): Promise<RssLink[]> {
    const client = db();
    const text = 'select * from rsslinks where id_user = $1';
    const result = await client.query(text, [user.id]);
    await closeConnection();
    return result.rows;
  }
}
