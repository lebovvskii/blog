import cl from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import { Title } from '@/components';

import { urlFor } from '../../../lib/client';
import styles from './post.module.scss';

export const Post = ({ post }) => {
  const { image, title, description, slug } = post;
  return (
    <Link
      href={`/post/${encodeURIComponent(slug.current)}`}
      className={cl(styles.post, styles.postLink)}
    >
      <Title type="Small" className={styles.postTitle}>
        {title}
      </Title>
      <div className={styles.postContent}>
        <div>
          <Image
            src={urlFor(image).url()}
            alt={title}
            width="100"
            height="100"
          />
        </div>
        <p className={styles.postDescription}>{description}</p>
      </div>
    </Link>
  );
};
