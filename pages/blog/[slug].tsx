import { FC } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Layout from '@components/Layout';
import { getAllSlugs, getPostData, PathParams } from '@lib/posts';
import Date from '@components/Date';
import styles from '@styles/Post.module.css';

interface PostProps {
  title: string;
  slug: string;
  date: string;
  summary: string;
  banner: string;
  body: string;
  tags?: string[];
}
const Post: FC<PostProps> = ({ title, banner, date, body, tags = [] }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>

    <Layout>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      >
        <article className={styles.article}>
          <header className={styles.header}>
            <figure className={styles.banner}>
              <Image src={banner} layout="fill" objectFit="cover" />
            </figure>

            <h1 className={styles.title}>{title}</h1>

            <p className={styles.metadata}>
              <span>
                <Date dateString={date} />
              </span>
              <span>||</span>
              <span>{tags.join(', ')}</span>
            </p>
          </header>

          <section
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: body }}
            className={`${styles.container} ${styles.body}`}
          />
        </article>
      </motion.div>
    </Layout>
  </>
);

export const getStaticPaths = async () => {
  const paths = getAllSlugs();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: PathParams) => {
  const post = await getPostData(params.slug);

  return {
    props: post,
  };
};

export default Post;
