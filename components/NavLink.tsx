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

  let { className = '' } = children.props;
  if (router.pathname === href) {
    className = `${className} ${styles.selected}`;
  }

  return (
    <Link href={href} passHref={passHref}>
      {cloneElement(children, { className })}
    </Link>
  );
};

export default NavLink;
