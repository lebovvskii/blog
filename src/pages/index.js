import '../styles/global.scss';
import '../styles/reset.scss';

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
        <Title type="Medium">New Post</Title>
      </Section>
    </div>
  );
}
