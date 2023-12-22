import { client } from '../../../lib/client';

export default async function posts(req, res) {
  const { start, end } = req.query;

  if (isNaN(Number(start)) || isNaN(Number(end))) {
    return res.status(400).end();
  }

  const { posts, total } = await loadPosts(start, end);

  res.status(200).json({
    posts,
    total,
  });
}

export const loadPosts = async (start, end) => {
  const query = `{
    "posts": *[_type == "post"] | order(publishDate) [${start}...${end}] {_id, publishDate, title, slug, description, image },
    "total": [count(*[_type == "post"])] 
  }`;
  const { posts, total } = await client.fetch(query);

  return {
    posts,
    total,
  };
};
