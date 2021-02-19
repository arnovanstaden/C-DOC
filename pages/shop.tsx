import Image from "next/image";

// Styles
import styles from '../styles/pages/shop.module.scss';

// Components
import Layout from "../components/Layout/Layout";
import Section from "../components/Section/Section";

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
            </Section>
        </Layout>
    )
}
