import { FC, useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { MdSearch } from 'react-icons/md';
import Layout from '@components/Layout';
import styles from '@styles/Blog.module.css';
import BlogCard from '@components/BlogCard';

interface PostProps {
  id: string;
  title: string;
  slug: string;
  summary: string;
  banner: string;
}
interface BlogProps {
  post: PostProps;
}

const Blog: FC<BlogProps> = () => {
  const [searchTerm, setSearchTerm] = useState('');
  // const [posts, setPosts] = useState<PostProps[]>([]);

  return (
    <>
      <Head>
        <title>Babatunde Adeyemi | Blog</title>
      </Head>

      <Layout>
        <div className="container">
          <header className={styles.header}>
            <h1>Blog posts</h1>
            <form
              onSubmit={(event) => {
                event.preventDefault();
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
            {Array(45)
              .fill('')
              .map(() => (
                <BlogCard
                  banner="https://images.unsplash.com/photo-1605142811451-57f690e06dc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
                  title="A new day"
                  summary="Loremsldjlfsd"
                  slug="SDLKJFSLDJ/DSF"
                />
              ))}
          </motion.div>
        </div>
      </Layout>
    </>
  );
};

export default Blog;
