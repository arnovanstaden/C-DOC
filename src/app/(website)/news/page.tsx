import styles from './NewsPage.module.scss';
import Section from '@components/website/layout/Section/Section';
import Article from '@components/website/content/Article/Article';
import { generateCustomMetaData } from '@utils/metadata';

export const metadata = generateCustomMetaData({
  title: 'News | C-DOC',
  description: 'Stay up to date with the latest news and articles from C-DOC.',
});

const NewsPage = ({ articles = [] }) => {
  return (
    <main>
      <Section
        heading="News &amp; Articles"
        subHeading="Stay up to date with the latest news and articles from C-DOC"
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

