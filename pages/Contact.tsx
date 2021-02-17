// Components
import Layout from "../components/Layout/Layout";
import Section from "../components/Section/Section";
import Landing from "../components/Landing/Landing";

// Styles
import styles from '../styles/pages/Home.module.scss';

export default function Contact() {
    return (
        <Layout
            head={{
                title: "C-DOC | Commercial Diving and Offshore Consultancy",
                description: "C-DOC Provides Effective Medical Support to the Diving and Maritime Industry.",
                canonical: "/"
            }}
        >
            <Landing
                imageURL="/images/pages/contact/landing.jpeg"
            >
                <h1>Providing Effective <span>Medical Support</span> to the Diving and Maritime Industry.</h1>
                <p>The C-DOC team remain committed and dedicated to safety and competence in the commercial diving community through effective education, consulting, equipment design and usage. We offer:</p>
                <ul>
                    <li>
                        <img src="/images/other/red-cross.svg" alt="red cross" />
              Consultation &amp; Skills Training

                    </li>
                    <li>
                        <img src="/images/other/red-cross.svg" alt="red cross" />
                Medical Kits for Vessels &amp; Diving Operations
                    </li>
                    <li>
                        <img src="/images/other/red-cross.svg" alt="red cross" />
                Maritime Pharmaceutical Services
                    </li>
                </ul>
            </Landing>
        </Layout>
    )
}
