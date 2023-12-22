import React from 'react';

import { ScreenEgg } from '../ScreenEgg/screen-egg.component';
import styles from './buy-me-coffee.module.scss';

export const BuyMeCoffee = () => {
  return (
    <ScreenEgg type="Right">
      <div className={styles.buyCoffee}>
        <a
          href="https://www.youtube.com/watch?v=SUiMr3h50_g&ab_channel=Pumers"
          className={styles.Button}
        >
          Buy me a coffee
        </a>
      </div>
    </ScreenEgg>
  );
};
