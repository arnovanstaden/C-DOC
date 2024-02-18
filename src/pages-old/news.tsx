import { GetStaticProps } from 'next'


// Styles
import styles from '../styles/pages/news.module.scss';

// Components
import Layout from '@components/website/layout/Layout';
import Section from '@components/website/layout/Section/Section';
import Article from '@components/website/content/Article/Article';
import axios from 'axios';

export default function News({ articles }) {
  return (
    <Layout
      head={{
        title: 'News | C-DOC',
        description: 'Stay up to date with the latest news and articles from C-DOC.',
        canonical: '/news'
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
  const articles = await axios({
    method: 'GET',
    url: `${process.env.NEXT_PUBLIC_API_URL}/articles`,
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((res) => res.data);

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
