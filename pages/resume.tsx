import Head from 'next/head';
import { FaRegFilePdf } from 'react-icons/fa';
import Layout from '@components/Layout';
import pageStyles from '@styles/Page.module.css';
import resumeStyles from '@styles/Resume.module.css';
import Role from '@components/Role';

const experiences = [
  {
    title: 'Technical Team Lead',
    about:
      'Studio 14 is a digital agency that helps SMEs and startups develop and launch exciting and innovative products. Studio 14 has worked with government bodies like Birmingham City Council and organizations like PZ Cussons.',
    company: 'Studio 14, Birmingham, UK',
    duration: 'Mar 2019 - Now',
    activities: [
      'Led a team comprising frontend, backend, and mobile developers to develop products for clients mostly in the United Kingdom.',
      'Design/plan product’s architecture',
      'Put together in-house best practices like proper Git workflow, agile, coding style guides, e.t.c.',
      'Enforced test-driven development',
      'Ensured excellent code quality',
      'Unblocked my team members',
      'Refactored code for readability and performance',
      'Technologies: Go, PostgreSQL, Typescript, React/Next.js',
    ],
  },
  {
    title: 'Full-stack Developer',
    company: 'Busha, Lagos, NG',
    duration: 'May 2018 - Feb 2019',
    about:
      'Busha is a platform where people can seamlessly buy and sell cryptocurrencies, easily manage their cryptocurrency-investment portfolio. Busha allows users to exchange cryptocurrencies for real cash within 30 minutes.',
    activities: [
      'Integrated payment and bank deposit with PayStack, enabling users to fund their wallets with debit or credit cards and getting paid in naira after they sold their cryptocurrencies',
      'Joined the backend developer to design and create numerous endpoints for the web and mobile apps',
      'Created several React components and consumed backend APIs both on the user-facing the admin dashboards',
      'Collaborated with hardworking and motivated engineers and designers to build and lunch Busha in just 5 months. Busha achieved 30 million naira transaction volume in the first month',
      'Technologies: React, Postgres, MongoDB, Redis',
    ],
  },
  {
    title: 'Software Developer',
    company: 'Andela, Lagos, NG',
    about:
      'Andela builds distributed engineering teams with Africa’s top software developers. Andela handles talent assessment, onboarding, and continuous improvement.',
    duration: 'Jul 2017 - Apr 2018',
    activities: [
      'Collaborated with different teams (both remote and local) to build world-class full-stack web applications.',
      'Completed my 10-month-long software development apprenticeship',
      'Technologies: Typescript, React, Angular, Node.js, PostgreSQL',
    ],
  },
];
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
              <span>Resume/CV</span>
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
