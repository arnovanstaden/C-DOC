import Image from "next/image";

// Styles
import styles from '../styles/pages/news.module.scss';

// Components
import Layout from "../components/Layout/Layout";
import Section from "../components/Section/Section";
import Article from "../components/Article/Article";

export default function News() {
    return (
        <Layout
            head={{
                title: "News | C-DOC",
                description: "Stay up to date with the latest news and articles from C-DOC.",
                canonical: "/news"
            }}
            noLanding={true}
        >
            <Section
                heading="News &amp; Articles"
                subHeading="Stay up to date with the latest news and articles from C-DOC"
            >
                <div className={styles.grid}>
                    <Article />
                </div>
            </Section>
        </Layout>
    )
}
