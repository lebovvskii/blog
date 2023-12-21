import './social-networks.styles.scss';

import React from 'react';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';

import { ScreenEgg } from '../ScreenEgg/screen-egg.component';

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
      <ul className="list">
        {socialNetworks.map((socialNetwork) => (
          <li key={socialNetwork.id}>
            <a href={socialNetwork.url} className="list__link">
              <socialNetwork.icon size="50" color="black" />
            </a>
          </li>
        ))}
      </ul>
    </ScreenEgg>
  );
};
