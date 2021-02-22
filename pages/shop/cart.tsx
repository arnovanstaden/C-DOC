import Link from "next/link";
import { GetStaticProps } from 'next'


// Styles
import styles from '../../styles/pages/shop/cart.module.scss';

// Components
import Layout from "../../components/Layout/Layout";
import Section from "../../components/Section/Section";

export default function Shop() {
    return (
        <Layout
            head={{
                title: "Cart | C-DOC",
                description: "Your Cart",
                canonical: "/shop/cart",
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

            </Section>

        </Layout>
    )
}

