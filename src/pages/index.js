/* eslint-disable no-unused-vars */
import '../styles/reset.scss';
import '../styles/global.scss';

import React, { useState } from 'react';

import {
  Button,
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
  const [loadedAmount, setLoadedAmount] = useState(LOAD_STEP);
  const [loading, setLoading] = useState(false);

  const isLoadButton = total > loadedAmount;

  const params = new URLSearchParams({
    start: loadedAmount,
    end: loadedAmount + LOAD_STEP,
  });

  const getMorePosts = async () => {
    setLoading(true);
    try {
      const data = await fetch(`/api/posts?${params.toString()}`).then(
        (response) => response.json(),
      );

      setLoadedAmount(loadedAmount + 1);
      setPosts([...posts, ...data.posts]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <Section>
        <Cover title="Nikita Lebowski" />
        <SocialNetworks />
        <BuyMeCoffee />
      </Section>
      <Section>
        <Title type="medium">New Post</Title>
        <PostGrid posts={posts} />
        {isLoadButton && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Button onClickHandler={getMorePosts} disabled={loading}>
              LoadMore
            </Button>
          </div>
        )}
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
