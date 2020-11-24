import { FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '@styles/BlogCard.module.css';

interface BlogCardProps {
  banner: string;
  slug: string;
  summary: string;
  title: string;
}
const BlogCard: FC<BlogCardProps> = ({ banner, title, summary }) => (
  <motion.div
    className={styles.blogCard}
    whileHover={{ scale: 1.008 }}
    whileTap={{ scale: 1 }}
  >
    <figure className="relative">
      <Image src={banner} alt={title} objectFit="cover" layout="fill" />
    </figure>

    <h2 className={styles.title}>{title}</h2>

    <p>{summary}</p>
  </motion.div>
);

export default BlogCard;
