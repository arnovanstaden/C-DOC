import Link from "next/link";

// Styles
import styles from "./header.module.scss";

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href="/">
                <a className={styles.logo}>
                    <img src="/images/logos/logo.png" alt="C-DOC Logo" />
                    <p>Commercial Diving and <br /> Offshore Consultancy</p>
                </a>
            </Link>
            <button className={styles.button}>
                <div></div>
                <div></div>
                <div></div>
            </button>
        </header>
    )
}
