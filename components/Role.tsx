import { FC } from 'react';
import styles from '@styles/Role.module.css';

interface RoleProps {
  title: string;
  company: string;
  about: string;
  activities?: string[];
  duration: string;
}
const Role: FC<RoleProps> = ({
  title,
  company,
  about,
  activities,
  duration,
}) => (
  <div className={styles.container}>
    <header className={styles.header}>
      <div className={styles.title}>
        <h2>{title}</h2>
        <span>{company}</span>
      </div>

      <span>{duration}</span>
    </header>

    <p className={styles.about}>{about}</p>

    <ul className={styles.activities}>
      {activities?.map((activity) => (
        <li>{activity}</li>
      ))}
    </ul>
  </div>
);

export default Role;
