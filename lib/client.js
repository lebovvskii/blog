import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const clientConfig = {
  projectId: 'o82t55qp',
  dataset: 'production',
};

export const client = createClient({
  projectId: 'o82t55qp',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-12-22', // use current date (YYYY-MM-DD) to target the latest API version
  token: process.env.NEXT_SANITY_PUBLIC_TOKEN, // Only if you want to update content with the client
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
