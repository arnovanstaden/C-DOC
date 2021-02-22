import Image from "next/image";
import { useState } from "react";
import { GetStaticProps } from 'next'


// Styles
import styles from '../styles/pages/news.module.scss';

// Components
import Layout from "../components/Layout/Layout";
import Section from "../components/Section/Section";
import Article from "../components/Article/Article";

export default function News({ articles }) {
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
                noCross={true}
                classNameProp={styles.news}
            >
                <div className={styles.grid}>
                    {articles.map((article, index) => (
                        <Article {...article} key={index} />
                    ))}
                </div>
            </Section>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch(`${process.env.API_URL}/articles`)
    const articles = await res.json()

    if (!articles) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            articles
        },
    }
}
