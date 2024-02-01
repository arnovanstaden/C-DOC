import { useState } from "react";
import { GetStaticProps } from 'next';
import { updateCart } from "../../utils/cart";
import Link from "next/link";
import Image from 'next/image';
import fs from 'fs-extra';

// Components
import Layout from "../../components/Layout/Layout";
import Section from "../../components/Section/Section";

// Styles
import styles from "../../styles/pages/shop/[id].module.scss";

export default function Product({ product }) {
  // State
  const [quantity, setQuantity] = useState(1);

  const ProductOption = () => {
    if (product.price === 0 && product.digital) {
      return (
        <div className={styles.cart}>
          <button className={styles.freebie}>
            <a href={product.document} target="blank" download>Download Freebie</a>
          </button>
        </div>
      )
    }
    return (
      <div className={styles.cart}>
        <div className={styles.quantity}>
          <input min={1} type="number" name="quantity" value={quantity} onChange={e => setQuantity(parseInt(e.target.value))} />
        </div>
        <button className={styles.add} onClick={() => updateCart(product, quantity)}>
          <i className="icon-local_grocery_store"></i>
          Add To Cart
        </button>
      </div>
    )
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
        <div className={styles.shop}>
          <Link href="/shop">
            <button className="button button--border">
              Back to Shop
            </button>
          </Link>
        </div>
        <div className={styles.grid}>
          <div className={styles.image}>
            <Image
              src={product.thumbnail} alt="Article Image"
              layout='fill'
            />
          </div>
          <div className={styles.content}>
            <p className={styles.category}>{product.category}</p>
            <h2 className={styles.name}>{product.name}</h2>
            <p className={styles.price}>{product.price > 0 ? `R ${product.price}` : `Free`}</p>
            <div className={styles.details}>
              <p className={styles.active}>Description</p>
            </div>
            <p className={styles.description}>
              {product.description}
              {product.digital ? <span>This is a Digital Product</span> : null}
            </p>
            <ProductOption />
          </div>
        </div>
      </Section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const products = await fs.readJson('data/products.json');
  const product = products.find((product) => product.id === params.id);

  if (!product) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      product,
    },
  }
}

export async function getStaticPaths() {
  const products = await fs.readJson('data/products.json');


  const paths = products.map((product) => `/shop/${product.id}`)
  return { paths, fallback: false }
}

