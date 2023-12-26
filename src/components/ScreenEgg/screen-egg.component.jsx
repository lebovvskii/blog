import cl from 'classnames';
import React from 'react';

import styles from './screen-egg.module.scss';

// eslint-disable-next-line react/prop-types
export const ScreenEgg = ({ type, children }) => {
  return (
    <div className={cl(styles.screenEgg, styles[`${type}`])}>
      {children}
    </div>
  );
};
