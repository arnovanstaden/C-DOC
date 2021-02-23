import { getCart } from "../../utils/cart";
import { GetStaticProps } from 'next';
import Link from "next/link";
import { useState, useEffect } from "react";



// Components
import CartItem from "../../components/CartItem/CartItem";
import Section from "../../components/Section/Section";
import Layout from "../../components/Layout/Layout";

// Styles
import styles from "../../styles/pages/cart/index.module.scss";

export default function Cart({ products, shopSettings }) {

    // State
    const [isLoading, setLoading] = useState(true);
    const [cart, setCart] = useState(getCart());
    const [showCart, setShowCart] = useState(true);
    const [showCheckout, setShowCheckout] = useState(false);

    // Helpers
    const getProduct = (item) => {
        let product = products.find(product => product.id === item.id);
        return product
    }

    // Handlers
    const handleCartChange = (() => {
        setCart(getCart())
    })

    const handleCheckoutShow = () => {
        // Check Quants
        setShowCart(false)
        setShowCheckout(true)
        handleCartChange();
    }

    const handleCartShow = () => {
        setShowCheckout(false)
        setShowCart(true)
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
                noCross={true}
                classNameProp={styles.cart}
            >
                <div className={styles.grid}>
                    <div className={styles.items}>
                        {cart === undefined || cart.length === 0 ?
                            <p>Your Cart is Empty :(</p>
                            : cart.map((item, index) => (
                                <CartItem
                                    item={item}
                                    product={getProduct(item)}
                                    key={index}
                                    handleCartChange={() => handleCartChange()} />
                            ))
                        }
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
