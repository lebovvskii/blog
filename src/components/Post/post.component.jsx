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
      className={styles.link}
    >
      <Title type="small" className={styles.title}>
        {title}
      </Title>
      <div className={styles.content}>
        <div>
          <Image
            src={urlFor(image).url()}
            alt={title}
            width="100"
            height="100"
          />
        </div>
        <p className={styles.description}>{description}</p>
      </div>
    </Link>
  );
};
