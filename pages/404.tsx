import Head from 'next/head';
import Layout from '@components/Layout';
import notFoundStyles from '@styles/NotFound.module.css';

const NotFound = () => (
  <>
    <Head>
      <title>Page Not Found</title>
    </Head>
    <Layout>
      <div className="container">
        <p className={notFoundStyles.fourOFour}>
          <span>4</span>
          <span>0</span>
          <span>4</span>
        </p>
      </div>
    </Layout>
  </>
);

export default NotFound;
