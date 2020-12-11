import { FC } from 'react';
import Layout from '@components/Layout';
import Head from 'next/head';
import pageStyles from '@styles/Page.module.css';

const Contact: FC = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Layout>
        <div className="container">
          <header className={pageStyles.header}>
            <h1>Contact</h1>
          </header>
          sdfsdhf
        </div>
      </Layout>
    </>
  );
};

export default Contact;
