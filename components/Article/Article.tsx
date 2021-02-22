import Image from "next/image";
import { convertImage } from "../../utils/utils";

// Styles
import styles from "./article.module.scss";

interface IArticle {
    article: {
        name: string,
        description: string,
        author: string,
        researcher: string,
        image: string,
        file: string
    }
}

export default function Article({ article }: IArticle) {
    return (
        <article className={styles.article}>
            <div className={styles.image}>
                <img src={convertImage(article.image, 400)} alt="Article Image" />
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
    )
}
