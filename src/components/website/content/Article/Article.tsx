import Image from 'next/image';

// Styles
import styles from './article.module.scss';
import { IArticle } from '@types';


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
          <button className="button-grow">
            <a target="blank" href={article.file}>
              <span>Read</span>
              <i className="icon-arrow-right"></i>
            </a>
          </button>
        </div>
      </div>
    </article>
  );
}
