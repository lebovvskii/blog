import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';

import { clientConfig } from '../../../lib/client';
import styles from './content.module.scss';

const SanityImage = ({ asset }) => {
  const imageProps = useNextSanityImage(clientConfig, asset);

  if (!imageProps) return null;

  return (
    <Image
      {...imageProps}
      layout="responsive"
      sizes="(max-width: 800px) 100vw, 800px"
    />
  );
};

export const Content = ({ body }) => {
  const serializers = {
    types: {
      image: ({ value }) => {
        return <SanityImage {...value} />;
      },
      code: (props) => (
        <pre data-languange={props.node.languange}>
          <code>{props.node.code}</code>
        </pre>
      ),
    },
  };

  return (
    <div className={styles.content}>
      <PortableText
        components={serializers}
        value={body}
        projectId={clientConfig.projectId}
        dataset={clientConfig.dataset}
      />
    </div>
  );
};
