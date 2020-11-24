import { FC } from 'react';
import styles from '@styles/Layout.module.css';
import NavBar from './NavBar';
import Footer from './Footer';

const Layout: FC = ({ children }) => {
  return (
    <>
      <div className={styles.layout}>
        <NavBar />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
