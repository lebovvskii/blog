import cl from 'classnames';
import Link from 'next/link';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import styles from './article.module.scss';

export const Article = ({ children, className, backUrl }) => {
  return (
    <article className={cl(className, styles.article)}>
      <Link href={backUrl} className={styles.back}>
        <AiOutlineArrowLeft />
      </Link>
      <div>{children}</div>
    </article>
  );
};
