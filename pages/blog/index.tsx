import { FC, useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { MdSearch } from 'react-icons/md';
import Layout from '@components/Layout';
import styles from '@styles/Blog.module.css';
import BlogCard from '@components/BlogCard';
import { getSortedPostsData } from '@lib/posts';

interface PostProps {
  title: string;
  slug: string;
  date: string;
  summary: string;
  banner: string;
  tags?: string[];
}
interface BlogProps {
  initialPosts: PostProps[];
}

const Blog: FC<BlogProps> = ({ initialPosts = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [posts, setPosts] = useState<PostProps[]>(initialPosts);

  const searchPosts = (term: string) => {
    if (term) {
      setPosts(initialPosts.filter(({ title }) => title.includes(term)));
    } else {
      setPosts(initialPosts);
    }
  };

  return (
    <>
      <Head>
        <title>Blog posts</title>
      </Head>

      <Layout>
        <div className="container">
          <header className={styles.header}>
            <h1>Blog posts</h1>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                searchPosts(searchTerm);
              }}
            >
              <input
                type="search"
                placeholder="Search posts"
                aria-label="Search through blog posts"
                value={searchTerm}
                name="search"
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                  searchPosts(event.target.value);
                }}
              />

              <button type="submit" aria-label="Search blog post">
                <MdSearch />
              </button>
            </form>
          </header>
        </div>
        <div className="container">
          <motion.div
            className={styles.grid}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial="hidden"
            animate="visible"
          >
            {posts.map(({ title, summary, slug, banner }) => (
              <BlogCard
                banner={banner}
                title={title}
                summary={summary}
                slug={slug}
                key={slug}
              />
            ))}
          </motion.div>
        </div>
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      initialPosts: getSortedPostsData(),
    },
  };
};

export default Blog;
