import styles from "./header.module.scss";

export default function Header() {
    return (
        <header className={styles.header}>
            <img src="/images/logos/logo-wide.png" alt="C-DOC Logo" />
            <button className={styles.button}>
                <div></div>
                <div></div>
                <div></div>
            </button>
        </header>
    )
}
