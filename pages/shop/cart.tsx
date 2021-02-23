import { getCart } from "../../utils/cart";
import { GetStaticProps } from 'next';
import Link from "next/link";


// Components
import CartItem from "../../components/CartItem/CartItem";
import Section from "../../components/Section/Section";
import Layout from "../../components/Layout/Layout";

// Styles
import styles from "../../styles/pages/shop/cart.module.scss";

export default function Cart({ products, shopSettings }) {
    const cart = getCart();

    // Helpers
    const getProduct = (item) => {
        let product = products.find(product => product.id === item.id);
        return product
    }

    return (
        <Layout
            head={{
                title: "Cart | C-DOC",
                description: "",
                canonical: "/cart",
                robots: false
            }}
            noLanding={true}
            shop={true}
        >
            <Section
                heading="Your Cart"
                subHeading="These are the items in your cart:"
                noCross={true}
            >
                <div className={styles.cart}>
                    <div className={styles.items}>
                        {cart ?
                            cart.map((item, index) => (
                                <CartItem item={item} product={getProduct(item)} key={index} />
                            ))
                            : <p>There are no items in your cart</p>}
                    </div>
                    <div className={styles.options}>
                        <Link href="/shop">
                            <button className="button button--border">
                                <a>Back to Shop</a>
                            </button>
                        </Link>
                        <button className="button">
                            <p>Checkout</p>
                        </button>
                    </div>
                </div>
            </Section>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const productResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
    const products = await productResponse.json();

    const settingsResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/shopSettings`);
    const shopSettings = await settingsResponse.json();

    return {
        props: {
            products,
            shopSettings
        },
    }
}
