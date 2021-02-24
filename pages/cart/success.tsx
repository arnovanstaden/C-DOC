import { clearCart } from "../../utils/cart";
import { useEffect } from "react"

// Components
import Layout from "../../components/Layout/Layout";
import Section from "../../components/Section/Section";

// Styles
import styles from "../../styles/pages/cart/success.module.scss";

export default function Success() {

    useEffect(() => {
        clearCart()
    }, []);

    return (
        <Layout
            head={{
                title: "Success | C-DOC",
                description: "Transaction Successful",
                canonical: "/success",
                robots: false
            }}
            noLanding={true}

        >

            <Section
                heading="Success."
                classNameProp={styles.success}
            >
                <div className={styles.content}>
                    <h5>Your transaction has been successful!</h5>
                    <p>You will receive emails confirming your order and payment.</p>
                    <p>(Be sure to check your spam box if you don't see anything)</p>
                </div>
            </Section>
        </Layout>
    )
}
