import Image from 'next/image';
import styles from './article.module.scss';
import { IArticle } from '@types';
import Button from '@components/system/Button/Button';


export default function Article(article: IArticle) {
  return (
    <article className={styles.article}>
      <div className={styles.image}>
        <Image
          src={article.image} alt="Article Image"
          layout='fill'
        />
      </div>
      <div className={styles.content}>
        <h3>{article.name}</h3>
        <p>{article.description}</p>
        <aside>
          <p>Written by: <span>{article.author}</span></p>
          <p>Research by: <span>{article.researcher}</span></p>
        </aside>
        <div className={styles.read}>
          <Button href={article.file}>
            Read
          </Button>
        </div>
      </div>
    </article>
  );
}
