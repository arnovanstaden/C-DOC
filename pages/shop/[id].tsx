import { useState } from "react";
import { GetStaticProps } from 'next';
import { convertImage } from "../../utils/utils";
import { updateCart } from "../../utils/cart";

// Components
import Layout from "../../components/Layout/Layout";
import Section from "../../components/Section/Section";

// Styles
import styles from "../../styles/pages/shop/[id].module.scss";



export default function product({ product }) {
    // State
    const [tab, setTab] = useState("Description");
    const [quantity, setQuantity] = useState(1);

    const handleTabChange = (clickedElement) => {
        const tabs = document.querySelectorAll(`.${styles.details} p`);
        tabs.forEach((elem) => {
            elem.classList.remove(styles.active)
        })
        clickedElement.target.classList.add(styles.active);
        setTab(clickedElement.target.textContent)
    }

    return (
        <Layout
            head={{
                title: `${product.name} | C-DOC`,
                description: product.description,
                canonical: `/shop/${product.id}`
            }}
            noLanding={true}
            shop={true}
        >

            <Section
                noCross={true}
                classNameProp={styles.product}
            >
                <div className={styles.grid}>
                    <div className={styles.image}>
                        <img src={convertImage(product.thumbnail, 800)} alt="" />
                    </div>
                    <div className={styles.content}>
                        <p className={styles.category}>{product.category}</p>
                        <h2 className={styles.name}>{product.name}</h2>
                        <p className={styles.price}>R {product.price}</p>
                        <div className={styles.details}>
                            <p className={styles.active} onClick={(e) => handleTabChange(e)}>Description</p>
                            <p onClick={(e) => handleTabChange(e)}>Details</p>
                        </div>
                        <p className={styles.detailsContent}>
                            {tab === "Description" ? product.description : product.details}
                        </p>
                        <div className={styles.cart}>
                            <div className={styles.quantity}>
                                <input min={1} type="number" name="quantity" value={quantity} onChange={e => setQuantity(parseInt(e.target.value))} />
                            </div>
                            <button className={styles.add} onClick={() => updateCart(product, quantity)}>
                                <i className="icon-local_grocery_store"></i>
                            Add To Cart
                        </button>
                        </div>
                    </div>
                </div>
            </Section>

        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${params.id}`)
    const product = await res.json()
    return {
        props: {
            product,
        },
    }
}

export async function getStaticPaths() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`)
    const products = await res.json()
    const paths = products.map((product) => `/shop/${product.id}`)
    return { paths, fallback: false }
}

