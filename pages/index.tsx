import Head from 'next/head';
import Image from 'next/image';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
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
            src="https://res.cloudinary.com/duc7lbtnq/image/upload/v1607786724/babatun.de/tunde-black.jpg"
            alt="Babatunde Adeyemi"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className={styles.view}>
          <div className="container">
            <section className={`${styles.byline}`}>
              <h1>
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

              <div className={styles.socialIcons}>
                <a
                  href="https://twitter.com/codingpop"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter />
                </a>

                <a
                  href="https://linkedin.com/in/codingpop"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://github.com/codingpop"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
              </div>
            </section>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default HomePage;
