import { convertImage } from "../../utils/utils";

// Styles
import styles from "./article.module.scss";

interface IArticle {
  name: string;
  description: string;
  author: string;
  researcher: string;
  image: string;
  file: string;
}

export default function Article(props: IArticle) {
  return (
    <article className={styles.article}>
      <div className={styles.image}>
        <img src={convertImage(props.image, 400)} alt="Article Image" />
      </div>
      <div className={styles.content}>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <aside>
          <p>Written by: <span>{props.author}</span></p>
          <p>Research by: <span>{props.researcher}</span></p>
        </aside>
        <div className={styles.read}>
          <button className="button-grow">
            <a target="blank" href={props.file}>
              <span>Read</span>
              <i className="icon-arrow-right"></i>
            </a>
          </button>
        </div>
      </div>
    </article>
  )
}
