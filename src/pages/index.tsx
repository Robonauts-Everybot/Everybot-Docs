import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { Redirect } from '@docusaurus/router';

import styles from './index.module.css';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to the ${siteConfig.title}`}
      description="Home of the Everybot manual">
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
