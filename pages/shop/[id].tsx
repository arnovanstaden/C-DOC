// Components
import Layout from "../../components/Layout/Layout";
import Section from "../../components/Section/Section";

// Styles
import styles from "../../styles/pages/[product].module.scss";



export default function Project({ product }) {
    return (
        <Layout
            head={{
                title: `${product.name} | C-DOC`,
                description: product.description,
                canonical: `/shop/${product.id}`
            }}
            noLanding={true}
        >

            <Section
                noCross={true}
                classNameProp={styles.product}
            >
                <div className={styles.grid}>
                    <div className={styles.image}>
                        <img src={product.images[0]} alt="" />
                    </div>
                    <div className={styles.content}>
                        <p className={styles.category}>{product.category}</p>
                        <h2 className={styles.name}>{product.name}</h2>
                        <p className={styles.price}>R {product.price}</p>
                        <div className={styles.details}>
                            <p className={styles.active}>Description</p>
                            <p>Details</p>
                        </div>
                        <p className={styles.detailsContent}>
                            {product.description}
                        </p>
                        <div className={styles.cart}>
                            <div className={styles.quantity}>
                                <input type="number" name="" id="" value="1" />
                                <span>
                                    <i className="icon-arrow_drop_up"></i>
                                    <i className="icon-arrow_drop_down"></i>
                                </span>
                            </div>
                            <button className={styles.add}>
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

export async function getStaticProps({ params }) {
    const res = await fetch(`https://artbyjaret.herokuapp.com/products/${params.id}`)
    const product = await res.json()
    return {
        props: {
            product,
        },
    }
}

export async function getStaticPaths() {
    const res = await fetch('https://artbyjaret.herokuapp.com/products')
    const products = await res.json()
    const paths = products.map((product) => `/shop/${product.id}`)
    return { paths, fallback: false }
}

