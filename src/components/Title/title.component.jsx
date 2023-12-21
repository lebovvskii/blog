import cl from 'classnames';
import React from 'react';

import styles from './title.module.scss';

export const Title = ({ type = 'Medium', children }) => {
  return (
    <h2 className={cl(styles.postTitle, styles[`postTitle${type}`])}>
      {children}
    </h2>
  );
};
