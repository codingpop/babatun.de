import Link from 'next/link';
import styles from '@styles/NavBar.module.css';
import NavLink from './NavLink';

const NavBar = () => {
  return (
    <nav className={`${styles.navbar} container zLow`}>
      <span className={styles.logo}>
        <Link href="/" passHref>
          <a aria-current="page" className={styles.logoLink}>
            ~/babatun.de:
          </a>
        </Link>
        <span className={styles.cursor} />
      </span>

      <ul className={styles.menuLinks}>
        <li>
          <NavLink href="/" passHref>
            <a>Home</a>
          </NavLink>
        </li>
        <li>
          <NavLink href="/blog" passHref>
            <a>Blog</a>
          </NavLink>
        </li>
        <li>
          <NavLink href="/work" passHref>
            <a>Work</a>
          </NavLink>
        </li>
        <li>
          <NavLink href="/contact" passHref>
            <a>Contact</a>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
