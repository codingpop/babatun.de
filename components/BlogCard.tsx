import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@styles/BlogCard.module.css';

interface BlogCardProps {
  banner: string;
  slug: string;
  summary: string;
  title: string;
}
const BlogCard: FC<BlogCardProps> = ({ banner, title, summary, slug }) => (
  <div className={styles.blogCard}>
    <figure className="relative">
      <Image src={banner} alt={title} objectFit="cover" layout="fill" />
    </figure>

    <h2 className={styles.title}>
      <Link href={`/blog/${slug}`} passHref>
        <a>{title}</a>
      </Link>
    </h2>

    <p className={styles.summary}>{summary}</p>
  </div>
);

export default BlogCard;
