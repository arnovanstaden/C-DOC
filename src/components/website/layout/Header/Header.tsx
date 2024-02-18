import Link from 'next/link';

// Styles
import styles from './header.module.scss';
import Container from '@components/website/layout/Container/Container';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <Link href="/" className={styles.logo}>
            <img src="/images/logos/logo.png" alt="C-DOC Logo" />
            <p>Commercial Diving and <br /> Offshore Consultancy</p>
          </Link>
          <nav className={styles.nav}>
            <Link href="/">
              Home
            </Link>

            <Link href="/about">
              About
            </Link>

            <Link href="/services">
              Services
            </Link>

            <Link href="/shop/">
              Shop
            </Link>

            <Link href="/news">
              News
            </Link>

            <Link href="/contact">
              Contact
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
