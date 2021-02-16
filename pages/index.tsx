
// Components
import Layout from "../components/Layout/Layout";
import Section from "../components/Section/Section";

// Styles
import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <Layout
      head={{
        title: "C-DOC | Commercial Diving and Offshore Consultancy",
        description: "C-DOC Provides Effective Medical Support to the Diving and Maritime Industry.",
        canonical: "/"
      }}
    >

      <Section
        heading="Our Services"
      >
        <p>The C-DOC team remains committed and dedicated to safety and competence in the commercial diving community through effective education, consulting, equipment design and usage.</p>

        <p>Our team strives to ensure continued improvement and development for competency and safety in all dive operations inshore and offshore.
        </p>

        <div className={styles.servicesGrid}>

        </div>
      </Section>
    </Layout>
  )
}
