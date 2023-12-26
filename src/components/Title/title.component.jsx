import cl from 'classnames';
import React from 'react';

import styles from './title.module.scss';

export const Title = ({ type = 'medium', children, className }) => {
  return (
    <h2 className={cl(className, styles.title, styles[`${type}`])}>
      {children}
    </h2>
  );
};
