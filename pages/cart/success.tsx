// Components
import Layout from "../../components/Layout/Layout";
import Section from "../../components/Section/Section";

// Styles
import styles from "../../styles/pages/cart/success.module.scss";

export default function Success() {
    return (
        <Layout
            head={{
                title: "Contact | C-DOC",
                description: "Don't hesitate to get in touch with us if you require more information regarding our services, courses or the products we provide.",
                canonical: "/contact"
            }}
        >

            <Section
                heading="Our Story."
                classNameProp={styles.story}
                idProp="story"

            >
                <p>C-DOC’s founder member and subject matter expert is Bridget Thomson. Bridget and her highly skilled and experienced team remain committed and dedicated to safety and competence in the commercial diving community through effective education, consulting, equipment design and usage. The team strive to ensure continued improvement and development for competency and safety in all dive operations inshore and offshore.</p>

            </Section>
        </Layout>
    )
}
