import Head from 'next/head';
import Layout from '@components/Layout';

const Blog = () => {
  return (
    <>
      <Head>
        <title>Babatunde Adeyemi | Blog</title>
      </Head>

      <Layout>
        <div className="container">This is real</div>
      </Layout>
    </>
  );
};

export default Blog;
