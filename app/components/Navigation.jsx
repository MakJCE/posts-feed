'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.css';

const links = [
  {
    label: 'Home Page',
    route: '/'
  },
  {
    label: 'Posts',
    route: '/posts'
  },
  {
    label: 'About',
    route: '/about'
  },
  {
    label: 'Info',
    route: '/info'
  }
];

const Navigation = () => {
  const pathname = usePathname();
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navigation}>
          {links.map((link) => {
            return (
              <li
                className={
                  pathname === link.route
                    ? styles.tabSelected
                    : styles.tabNonSelected
                }
                key={link.label}
              >
                <Link href={link.route}>{link.label}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
