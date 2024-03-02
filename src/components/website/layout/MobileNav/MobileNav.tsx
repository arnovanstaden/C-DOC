'use client';

import Link from 'next/link';
import styles from './nav.module.scss';
import { useState } from 'react';
import classNames from 'classnames';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { usePathname } from 'next/navigation';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';

const MobileNav: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);
  const pathname = usePathname();

  const handleNavToggle = () => {
    setNavOpen((prev) => !prev);
  };

  const classes = classNames(
    styles.MobileNav,
    navOpen && styles.open
  );

  return (
    <div className={classes}>
      <IconButton disableRipple onClick={handleNavToggle} className={styles.toggleButton}>
        <MenuIcon />
      </IconButton>
      {pathname.includes('/shop') && (
        <Link href="/shop/cart">
          <IconButton>
            <ShoppingCartIcon />
          </IconButton>
        </Link>
      )}
      <nav className={styles.content}>
        <IconButton disableRipple onClick={handleNavToggle} className={styles.closeButton} >
          <CloseIcon />
        </IconButton>
        <ul className={styles.menu}>
          <li onClick={() => handleNavToggle()}>
            <Link href="/">
              Home
            </Link>
          </li>
          <li onClick={() => handleNavToggle()}>
            <Link href="/about">
              About
            </Link>
          </li>
          <li onClick={() => handleNavToggle()}>
            <Link href="/services">
              Services
            </Link>
          </li>
          <li onClick={() => handleNavToggle()}>
            <Link href="/courses">
              Courses
            </Link>
          </li>
          <li onClick={() => handleNavToggle()}>
            <Link href="/shop">
              Shop
            </Link>
          </li>
          <li onClick={() => handleNavToggle()}>
            <Link href="/news">
              News
            </Link>
          </li>
          <li onClick={() => handleNavToggle()}>
            <Link href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
