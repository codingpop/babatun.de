import { FC, cloneElement, ReactElement } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '@styles/NavLink.module.css';

interface NavLinkProps {
  href: string;
  passHref?: boolean;
  children: ReactElement<any>;
}
const NavLink: FC<NavLinkProps> = ({ href, children, passHref = false }) => {
  const router = useRouter();

  const isActive = () => {
    if (router.pathname === href) {
      return true;
    }

    if (router.pathname !== href && router.pathname.includes(href)) {
      return true;
    }

    return false;
  };

  let { className = '' } = children.props;
  if (isActive()) {
    className = `${className} ${styles.selected}`;
  }

  return (
    <Link href={href} passHref={passHref}>
      {cloneElement(children, { className })}
    </Link>
  );
};

export default NavLink;
