import Link from "next/link";
import { handleNavToggle } from "../../utils/utils";
import { getCartLength } from "../../utils/cart";

// Styles
import styles from "./header.module.scss";

interface IHeader {
  shop?: boolean
}

export default function Header({ shop }: IHeader) {

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <img src="/images/logos/logo.png" alt="C-DOC Logo" />
        <p>Commercial Diving and <br /> Offshore Consultancy</p>
      </Link>
      <div className={styles.options}>
        {shop ?
          <Link href="/cart/" className={styles.cart}>
            <i className="icon-local_grocery_store"></i>
          </Link>
          : null}
        <button className={styles.button} onClick={() => handleNavToggle()}>
          <div></div>
          <div></div>
          <div></div>
        </button>
      </div>
    </header>
  )
}
