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

import { loadPosts } from './api/posts';

const LOAD_STEP = 4;

export default function Home({ initialPosts, total }) {
  console.log(initialPosts);
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

export const getServerSideProps = async () => {
  const { posts, total } = await loadPosts(0, LOAD_STEP);
  return {
    props: {
      initialPosts: posts,
      total,
    },
  };
};
