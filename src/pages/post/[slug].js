import '../../styles/reset.scss';
import '../../styles/global.scss';

import { format } from 'date-fns';

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
    fallback: 'blocking',
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
  const date = format(new Date(publishDate), 'dd-mm-yyyy');
  return (
    <Article backUrl="/" className={styles.post}>
      <Title className={styles.postTitle}>{title}</Title>
      <p className={styles.postDate}>{date}</p>
      <Content body={body} />
    </Article>
  );
};

export default Post;
