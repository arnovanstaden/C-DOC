import Link from 'next/link';

// Styles
import styles from './footer.module.scss';
import Container from '@components/website/layout/Container/Container';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <Link href="/" className={styles.logo}>
            <img src="/images/logos/logo.png" alt="C-Doc Logo" />
            <p>Commercial Diving and <br /> Offshore Consultancy</p>
          </Link>
          <div className={styles.nav}>
            <ul>
              <li>
                <Link href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/shop/">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/news">
                  News
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.privacy}>
            <a href="/documents/C-DOC - POPIA and PAIA Privacy Policy.pdf" target="download">Privacy Policy</a>
          </div>
          <div className={styles.copy}>
            <p>© {new Date().getFullYear()} - Academy of Diving and Offshore Medicine (Pty) Ltd | T/A C-DOC  - Reg: 2018/398732/07</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
