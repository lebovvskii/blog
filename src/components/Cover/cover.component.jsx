import React from 'react';

import styles from './cover.module.scss';

export const Cover = ({ title }) => {
  const [name, surname] = title.split(' ');
  return (
    <div className={styles.cover}>
      <h1 className={styles.title}>
        {name}
        <br />
        {surname}
      </h1>
    </div>
  );
};
