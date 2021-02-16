
// Styles
import styles from "./section.module.scss";

type TSection = {
    children: React.ReactNode;
    heading?: string;
}

export default function Section(props: TSection) {

    const SectionHeading = (): JSX.Element => {
        if (props.heading) {
            return (
                <div className={styles.heading}>
                    <h1>{props.heading}</h1>
                    <span />
                </div>
            )
        }
        return null
    }
    return (
        <section className={styles.section}>
            <div className="container">
                <SectionHeading />
                {props.children}
            </div>
        </section>
    )
}
