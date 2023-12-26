import '../../styles/reset.scss';
import '../../styles/global.scss';

import { Article, Content, Title } from '@/components';

import { client } from '../../../lib/client';
import styles from './style.module.scss';

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
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const query = `*[_type == "post" && slug.current == "${slug}"][0]`;

  const post = await client.fetch(query);

  return {
    props: {
      post: post,
    },
  };
}

const Post = ({ post }) => {
  const { title, publishDate, body } = post;
  // eslint-disable-next-line no-undef
  const { DateTime } = require('luxon');
  const date = DateTime.fromISO(publishDate).toFormat('dd-LLL-yyyy');
  return (
    <Article backUrl="/">
      <Title className={styles.title}>{title}</Title>
      <p className={styles.date}>{date}</p>
      <Content body={body} />
    </Article>
  );
};

export default Post;
