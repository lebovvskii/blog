/* eslint-disable no-unused-vars */
import '../styles/reset.scss';
import '../styles/global.scss';

import React, { useState } from 'react';

import {
  BuyMeCoffee,
  Cover,
  PostGrid,
  Section,
  SocialNetworks,
  Title,
} from '@/components';

import { loadPosts } from './api/posts';

const LOAD_STEP = 4;

export default function Home({ initialPosts, total }) {
  const [posts, setPosts] = useState(initialPosts);
  console.log;
  return (
    <div>
      <Section>
        <Cover title="Nikita Lebowski" />
        <SocialNetworks />
        <BuyMeCoffee />
      </Section>
      <Section>
        <Title type="Medium">New Post</Title>
        <PostGrid posts={posts} />
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
