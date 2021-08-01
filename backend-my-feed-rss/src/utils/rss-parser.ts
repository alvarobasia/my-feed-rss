// eslint-disable-next-line @typescript-eslint/no-var-requires
const Parcer = require('rss-parser');
import { ElementFeed } from 'src/feed/entities/element.entity';
import { Feed } from 'src/feed/entities/feed.entity';
import { RssLink } from 'src/user/entities/rsslink.entity';

export const getFeed = async (links: RssLink[]): Promise<Feed[]> => {
  const parcer = new Parcer();
  const result: Feed[] = [];

  await Promise.all(
    links.map(async (rssLink) => {
      const feed = await parcer.parseURL(rssLink.link);

      const elements: ElementFeed[] = [];
      feed.items.forEach((item) => {
        const element = new ElementFeed();
        element.content = item.content;
        element.isoDate = item.isoDate;
        element.link = item.link;
        element.title = item.title;
        elements.push(element);
      });
      const feedRss = new Feed();
      feedRss.elements = elements;
      feedRss.rssLink = rssLink;
      result.push(feedRss);
    }),
  );

  return result;
};
