import styles from './NewsPage.module.scss';
import Section from '@components/website/layout/Section/Section';
import Article from '@components/website/content/Article/Article';
import { generateCustomMetaData } from '@utils/metadata';
import { getArticles } from '@lib/articles';
import Landing from '@components/website/content/Landing/Landing';
import Heading from '@components/website/layout/Heading';

export const revalidate = process.env.NODE_ENV === 'development' ? 0 : false;

export const metadata = generateCustomMetaData({
  title: 'News | C-DOC',
  description: 'Stay up to date with the latest news and articles from C-DOC.',
  image: '/images/pages/news/landing.jpeg',
});

const NewsPage = async () => {
  const articles = await getArticles();

  return (
    <main>
      <Landing
        imageURL="/images/pages/news/landing.jpeg"
      >
        <Heading
          heading={<>News &amp; Articles</>}
          subHeading={<>Stay up to date with the latest news and articles from C-DOC</>}
          divider
        />
      </Landing>
      <Section
        noCross={true}
        className={styles.news}
      >
        <div className={styles.grid}>
          {articles.map((article, index) => (
            <Article {...article} key={index} />
          ))}
        </div>
      </Section>
    </main>
  );
};

export default NewsPage;

