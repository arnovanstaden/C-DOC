import Image from "next/image";
import Link from "next/link";

// Styles
import styles from "./footer.module.scss";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <Link href="/">
                        <a className={styles.logo}>
                            <img src="/images/logos/logo-small.png" alt="C-Doc Logo" />
                            <p>Commercial Diving and <br /> Offshore Consultancy</p>
                        </a>
                    </Link>
                    <div className={styles.nav}>
                        <ul>
                            <li>
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about">
                                    <a>About</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/services">
                                    <a>Services</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop/">
                                    <a>Shop</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/news">
                                    <a>News</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact">
                                    <a>Contact</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.copy}>
                    <p>© 2020 - C-DOC (PTY) LTD.</p>
                    <p>Design &amp; Development by <a target="blank" href="https://webdacity.dev">Webdacity</a></p>
                </div>
            </div>
        </footer>
    )
}
