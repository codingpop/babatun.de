import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { limit } from 'stringz';
import remark from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export const getSortedPostsData = () => {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      ...matterResult.data,
      slug,
      tags: (matterResult.data?.tags as string)
        .toLowerCase()
        .replace(/ /g, '')
        .split(','),
      summary: limit(matterResult.data.summary, 200, '...', 'right'),
    };
  });

  return allPostsData.sort((a, b) => {
    // @ts-ignore
    if (a.date < b.date) {
      return 1;
    }

    return -1;
  });
};

export interface PathParams {
  params: {
    slug: string;
  };
}

export const getAllSlugs: () => PathParams[] = () => {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ''),
      },
    };
  });
};

export const getPostData = async (slug: string) => {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const body = processedContent.toString();

  return {
    ...matterResult.data,
    body,
    tags: (matterResult.data?.tags as string)
      .toLowerCase()
      .replace(/ /g, '')
      .split(','),
    slug,
  };
};
