import React from 'react';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';

import { ScreenEgg } from '../ScreenEgg/screen-egg.component';
import styles from './social-networks.module.scss';

export const SocialNetworks = () => {
  const socialNetworks = [
    {
      id: 1,
      url: 'https://github.com',
      icon: AiFillGithub,
    },
    {
      id: 2,
      url: 'https://instagram.com',
      icon: AiFillInstagram,
    },
  ];

  return (
    <ScreenEgg type="left">
      <ul>
        {socialNetworks.map((socialNetwork) => (
          <li key={socialNetwork.id}>
            <a href={socialNetwork.url} className={styles.link}>
              <socialNetwork.icon size="50" color="black" />
            </a>
          </li>
        ))}
      </ul>
    </ScreenEgg>
  );
};
