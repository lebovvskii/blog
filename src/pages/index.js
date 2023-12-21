import '../styles/reset.scss';
import '../styles/global.scss';

import React from 'react';

import {
  BuyMeCoffee,
  Cover,
  Section,
  SocialNetworks,
  Title,
} from '@/components';

export default function Home() {
  return (
    <div>
      <Section>
        <Cover title="Nikita Lebowski" />
        <SocialNetworks />
        <BuyMeCoffee />
      </Section>
      <Section>
        <Title>New Post</Title>
      </Section>
    </div>
  );
}
