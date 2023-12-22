import { client } from '../../../lib/client';

export const loadPosts = async (start, end) => {
  const query = `{
    "posts": *[_type == "post"],
    "total": count(*[_type == "post"]) | order(publishDate)   
  }`;
  const { posts, total } = await client.fetch(query);

  return {
    posts,
    total,
  };
};
