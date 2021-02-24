import Image from "next/image";
import Link from "next/link";
import { GetStaticProps } from 'next';
import { useState, useEffect } from "react"

// Styles
import styles from '../styles/pages/shop.module.scss';

// Components
import Layout from "../components/Layout/Layout";
import Section from "../components/Section/Section";
import Product from "../components/Product/Product";

export default function Shop({ products }) {

    const [filter, setFilter] = useState("All Products")


    const handleFilter = (clickedElement) => {

        // Active Category
        const tabs = document.querySelectorAll(`.${styles.categories} button`);
        tabs.forEach((elem) => {
            elem.classList.remove(styles.active)
        })
        clickedElement.target.classList.add(styles.active);
        setFilter(clickedElement.target.textContent)


        // Filter
        // let productGrid = document.querySelector(`.${styles.productGrid}`).children;
        // for (let j = 0; j < productGrid.length; j++) {
        //     // Remove Old Filter
        //     productGrid[j].classList.remove(`${styles.hideFilter}`)
        //     let category = productGrid[j].getAttribute("data-category");
        //     if (category !== activeCategory) {
        //         productGrid[j].classList.add(`${styles.hideFilter}`)
        //     }
        // }
    }

    useEffect(() => {
        console.log("Filter Changed");
    }, [filter])

    return (
        <Layout
            head={{
                title: "Shop | C-DOC",
                description: "Browse C-DOC’s wide range of Medical Equipment, Clothing, Gear and E-Books.",
                canonical: "/shop"
            }}
            noLanding={true}
            shop={true}
        >
            <Section
                heading="Shop"
                subHeading="Browse C-DOC’s wide range of Medical Equipment, Clothing, Gear and E-Books."
                noCross={true}
                classNameProp={styles.shop}
            >
                <div className={styles.categories}>
                    <button className={`${styles.button} ${styles.active}`} onClick={(e) => handleFilter(e)}>All Products</button>
                    <button className={styles.button} onClick={(e) => handleFilter(e)}>Medical Equipment</button>
                    <button className={styles.button} onClick={(e) => handleFilter(e)}>Clothing &amp; Gear</button>
                </div>
                <div className={styles.filter}>
                    <div className={styles.search}>

                    </div>
                    <div className={styles.filter}>

                    </div>
                </div>
                <div className={styles.grid}>
                    {products.map((product, index) => (
                        (filter === "All Products" || filter === product.category) ? < Product {...product} key={index} /> : null
                    ))}
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

export const getStaticProps: GetStaticProps = async () => {
    const productResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
    const products = await productResponse.json();

    return {
        props: {
            products
        },
    }
}
