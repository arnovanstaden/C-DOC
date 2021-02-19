import Image from "next/image";

// Styles
import styles from "./article.module.scss";

export default function Article() {
    return (
        <article className={styles.article}>
            <div className={styles.image}>
                <div className="next-image next-image--fill">
                    <Image src="/images/pages/home/courses.jpeg" layout="fill" alt="Article Image" />
                </div>
            </div>
            <div className={styles.content}>
                <h3>Reaching new depths of diver safety</h3>
                <p><span>South Africa’s SEADOG Commercial Diving School is attracting record numbers of students and professional divers. As Managing Director Bridget Thomson discusses, this is stabilising the business and helping the company focus more on the medical side of the business</span>...</p>
                <aside>
                    <p>Written by: <span>Will Daynes</span></p>
                    <p>Research by: <span>James Boyle</span></p>
                </aside>
                <div className={styles.read}>
                    <button className="button-grow">
                        <a>
                            <span>Read</span>
                            <i className="icon-arrow-right"></i>
                        </a>
                    </button>
                </div>
            </div>
        </article>
    )
}
