import Image from "next/image"

// Components
import Header from "../Header/Header";

// Styles
import styles from "./landing.module.scss";

type TLanding = {
    children: React.ReactNode;
    imageURL: string;
}


export default function Landing(props: TLanding) {
    return (
        <section className={styles.landing}>
            <div className={styles.content}>
                <Header />
                <div className={styles.text}>
                    {props.children}
                </div>
            </div>
            <div className={styles.image}>
                <Image layout="fill" objectFit="cover" alt="C-DOC Landing Image" src={props.imageURL} />
            </div>
        </section>
    )
}
