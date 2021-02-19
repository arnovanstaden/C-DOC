import { handleNavToggle } from "../../utils/utils"


// Components
import Link from "next/link";

// Styles
import styles from "./nav.module.scss";

export default function Nav() {

    return (
        <nav className={styles.nav} id="nav">
            <i className="icon-clear" onClick={() => handleNavToggle()}></i>
            <ul className={styles.menu}>
                <li>
                    <Link href="/home">
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
                    <Link href="/shop">
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
        </nav>
    )
}
