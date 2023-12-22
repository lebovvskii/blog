import { Article } from '@/components';

import { client } from '../../../lib/client';

export async function getStaticPaths() {
  const query = `*[_type == "post"] {
    slug {
      current
    }
  }`;

  const posts = await client.fetch(query);
  const paths = posts.map((post) => {
    return {
      params: {
        slug: post.slug.current,
      },
    };
  });

  return {
    paths: paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params: { slug } }) {
  const query = `*[_type == "post" && slug.current == "${slug}"][0]`;
  console.log(query);

  const post = await client.fetch(query);

  console.log(post);

  return {
    props: {
      post: post,
    },
  };
}

const Post = ({ post }) => {
  return (
    <Article>
      <h1>{post.title}</h1>
    </Article>
  );
};

export default Post;
