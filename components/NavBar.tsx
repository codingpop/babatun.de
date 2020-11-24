import Link from 'next/link';
import { MdMenu, MdClose } from 'react-icons/md';
import styles from '@styles/NavBar.module.css';
import NavLink from './NavLink';

const NavBar = () => {
  return (
    <header className={`${styles.navbar} container zLow`} id="">
      <span className={styles.logo}>
        <Link href="/" passHref>
          <a aria-current="page" className={styles.logoLink}>
            ~/babatun.de:
          </a>
        </Link>
        <span className={styles.cursor} />
      </span>

      <a
        href="#main-menu"
        className={styles.menuToggle}
        aria-label="Open main menu"
      >
        <MdMenu />
      </a>

      <nav className={styles.mainMenu} id="main-menu">
        <a href="#" className={styles.menuClose} aria-label="Close main menu">
          <MdClose />
        </a>
        <ul className={styles.ul}>
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

      {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
      <a
        href="#"
        className={styles.backdrop}
        aria-label="Close main menu"
        hidden
        tabIndex={-1}
      />
    </header>
  );
};

export default NavBar;
