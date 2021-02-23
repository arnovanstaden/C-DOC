// Components
import Layout from "../../components/Layout/Layout";
import Section from "../../components/Section/Section";

// Styles
import styles from "../../styles/pages/cart/success.module.scss";

export default function Success() {
    return (
        <Layout
            head={{
                title: "Success | C-DOC",
                description: "Transaction Successful",
                canonical: "/success",
                robots: false
            }}
        >

            <Section
                heading="Success."
                classNameProp={styles.success}
            >
                <p>Your transaction has been successful</p>
            </Section>
        </Layout>
    )
}
