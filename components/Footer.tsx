import styles from '@styles/Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
    <p className="small">&copy; {new Date().getFullYear()} Babatunde Adeyemi</p>
  </footer>
);

export default Footer;
