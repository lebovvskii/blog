import cl from 'classnames';
import React from 'react';

import styles from './title.module.scss';

export const Title = ({ type = 'Medium', children, className }) => {
  return (
    <h2 className={cl(className, styles.title, styles[`title${type}`])}>
      {children}
    </h2>
  );
};
