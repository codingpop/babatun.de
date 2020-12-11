import Head from 'next/head';
import { FaRegFilePdf } from 'react-icons/fa';
import Layout from '@components/Layout';
import Role from '@components/Role';
import experiences from '@utils/experiences';
import pageStyles from '@styles/Page.module.css';
import resumeStyles from '@styles/Resume.module.css';

const Resume = () => {
  return (
    <>
      <Head>
        <title>Resume/CV</title>
      </Head>

      <Layout>
        <div className="container">
          <header className={pageStyles.header}>
            <h1>
              <span>CV/Resume</span>
              <span>
                <a
                  href="/res.pdf"
                  target="_blank"
                  aria-label="Download PDF version"
                >
                  <FaRegFilePdf />
                </a>
              </span>
            </h1>
          </header>

          <div className={resumeStyles.resume}>
            {experiences.map((experience) => (
              <Role key={experience.duration} {...experience} />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Resume;
