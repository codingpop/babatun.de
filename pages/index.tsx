import Head from 'next/head';
import Image from 'next/image';
import Layout from '@components/Layout';
import styles from '@styles/Home.module.css';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Babatunde Adeyemi</title>
      </Head>

      <Layout>
        <div className={styles.backdrop}>
          <Image
            src="/images/tunde-black.jpg"
            alt="Babatunde Adeyemi"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="container">
          <section className={`${styles.byline}`}>
            <h1 className="zLow">
              Hi, I&apos;m Babatunde Adeyemi.
              <br />
              I&apos;m a Software Engineer.
            </h1>

            <p>
              I&apos;m passionate about Go, Typescript, NodeJS, Docker,
              <br />
              Kubernetes, and distributed systems.
              <br />
              I&apos;m a Technical Team Lead at Studio 14, Birmingham.
              <br />
              I live in Lagos, Nigeria.
              <br />
            </p>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default HomePage;
