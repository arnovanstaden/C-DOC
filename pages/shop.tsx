import Image from "next/image";
import Link from "next/link";

// Styles
import styles from '../styles/pages/shop.module.scss';

// Components
import Layout from "../components/Layout/Layout";
import Section from "../components/Section/Section";
import Product from "../components/Product/Product";

export default function Shop() {
    return (
        <Layout
            head={{
                title: "Shop | C-DOC",
                description: "Browse C-DOC’s wide range of Medical Equipment, Clothing, Gear and E-Books.",
                canonical: "/shop"
            }}
            noLanding={true}
        >
            <Section
                heading="Shop"
                subHeading="Browse C-DOC’s wide range of Medical Equipment, Clothing, Gear and E-Books."
                noCross={true}
                classNameProp={styles.shop}
            >
                <div className={styles.categories}>
                    <button className={`${styles.button} ${styles.active}`}>All Products</button>
                    <button className={styles.button}>Medical Equipment</button>
                    <button className={styles.button}>Clothing &amp; Gear</button>
                    <button className={styles.button}>E-Books</button>
                </div>
                <div className={styles.filter}>
                    <div className={styles.search}>

                    </div>
                    <div className={styles.filter}>

                    </div>
                </div>
                <div className={styles.grid}>
                    <Product name="Stretcher" price={500} />
                    <Product name="This" price={300} />
                    <Product name="This" price={300} />
                    <Product name="That" price={300} />
                    <Product name="That" price={300} />
                </div>
            </Section>

            <section className={styles.equipment}>
                <div className="heading">
                    <h1>C-DOC Medical Kits.</h1>
                    <span />
                </div>
                <p>The C-DOC health and safety team design products with the specific knowledge and experience of commercial diving operations. These kits are not available for puchase online but can be ordered via our order form:</p>
                <Link href="/services#equipment">
                    <button className="button">
                        <a>
                            Medical Kits Enquiry
                        </a>
                    </button>
                </Link>
            </section>
        </Layout>
    )
}
