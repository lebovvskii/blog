import { Post } from '@/components';

import styles from './post-grid.module.scss';

export const PostGrid = ({ posts }) => {
  return (
    <div className={styles.postGrid}>
      {posts.map((post) => (
        // eslint-disable-next-line react/jsx-key
        <Post key={post.slug.current} post={post} />
      ))}
    </div>
  );
};
