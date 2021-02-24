import Image from "next/image"

// Components
import Header from "../Header/Header";
import Nav from "../Nav/Nav";

// Styles
import styles from "./landing.module.scss";

interface TLanding {
    children: React.ReactNode;
    imageURL: string;
    custom?: boolean;
}


export default function Landing(props: TLanding) {
    return (
        <section className={styles.landing}>
            <div className={styles.content}>
                <Header />
                {props.custom ? props.children :
                    <div className={styles.text}>
                        {props.children}
                    </div>
                }
            </div>
            <div className={styles.image}>
                <div className="next-image next-image--intrinsic">
                    <Image priority width={1000} height="auto" alt="C-DOC Landing Image" src={props.imageURL} />
                </div>
            </div>
        </section>
    )
}
