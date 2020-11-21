import styles from '@styles/Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
    &copy; {new Date().getFullYear()} Babatunde Adeyemi
  </footer>
);

export default Footer;
