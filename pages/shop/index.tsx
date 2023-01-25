import Link from "next/link";
import { GetStaticProps } from 'next';
import { useState, useRef } from "react";
// Styles
import styles from '../../styles/pages/shop.module.scss';
import { sortProducts } from '../../utils/utils';
import Layout from '../../components/Layout/Layout';
import Section from '../../components/Section/Section';
import Product from '../../components/Product/Product';
import fs from 'fs-extra';

// Components

export default function Shop({ products }) {
  // Refs
  const sortRef = useRef()

  // State
  const [filter, setFilter] = useState("All Products");
  const [productsToShow, setProductsToShow] = useState(sortProducts(products, "name"))

  // Handlers

  const handleFilter = (clickedElement) => {

    // Active Category
    const tabs = document.querySelectorAll(`.${styles.categories} button`);
    tabs.forEach((elem) => {
      elem.classList.remove(styles.active)
    })
    clickedElement.target.classList.add(styles.active);
    setFilter(clickedElement.target.textContent)
  }

  const handleSort = () => {
    let select = sortRef.current as HTMLSelectElement;
    setProductsToShow(sortProducts([...products], select.value));
  }

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
          <button className={styles.button} onClick={(e) => handleFilter(e)}>Guidance Documents</button>
        </div>
        <div className={styles.sort}>
          <label htmlFor="sort">Sort By:</label>
          <select name="sort" id="sort" onChange={handleSort} ref={sortRef}>
            <option value="name">Name</option>
            <option value="price">Price</option>
          </select>
        </div>
        <div className={styles.grid}>
          {productsToShow.map((product, index) => (
            (filter === "All Products" || filter === product.category) ? <Product {...product} key={index} /> : null
          ))}
        </div>
      </Section>

      <section className={styles.equipment}>
        <div className="heading">
          <h1>C-DOC Medical Kits.</h1>
          <span />
        </div>
        <p>The C-DOC health and safety team design products with the specific knowledge and experience of commercial diving operations. These kits are not available for puchase online but can be ordered via our order form:</p>
        <button className="button">
          <Link href="/services#equipment">
            <a>
              Medical Kits Enquiry
            </a>
          </Link>
        </button>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await fs.readJson('data/products.json');

  return {
    props: {
      products
    },
  }
}
