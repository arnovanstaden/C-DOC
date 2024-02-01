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
  )
}
