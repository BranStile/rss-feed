
import Parser from 'rss-parser';


export async function GET() {
  const parser = new Parser();

  let feed = await parser.parseURL('https://www.whitehouse.gov/news/feed/');
  let feed2 = await parser.parseURL('https://trumpstruth.org/feed');

  const normalize = (feed: any) =>
      feed.items.map((item: any) => ({
        title: item.title,
        link: item.link,
        published: item.pubDate,
        summary: item.contentSnippet,
      }));

  return Response.json({
    whitehouse: normalize(feed),
    truth: normalize(feed2),
  });
}






