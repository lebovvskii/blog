import styles from './post.module.scss';

export const Post = ({ post }) => {
  return (
    <div className={styles.post}>
      <h2 className={styles.postTitle}>{post.title}</h2>
    </div>
  );
};
