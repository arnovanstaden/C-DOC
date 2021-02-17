import ClassNames from "classnames";
// Styles
import styles from "./section.module.scss";

type TSection = {
    children: React.ReactNode;
    heading?: string;
    classNameProp?: string;
    idProp?: string;
    dark?: boolean
}

export default function Section(props: TSection) {

    const SectionHeading = (): JSX.Element => {
        if (props.heading) {
            return (
                <div className="heading">
                    <h1>{props.heading}</h1>
                    <span />
                </div>
            )
        }
        return null
    }

    const sectionClasses = ClassNames(
        styles.section,
        props.classNameProp ? props.classNameProp : "",
        props.dark ? styles.dark : ""
    )
    return (
        <section className={sectionClasses} id={props.idProp ? props.idProp : ""}>
            {props.heading ? <img className={styles.cross} src="/images/other/red-cross.svg" alt="Red Cross" /> : null}
            <div className="container">
                <SectionHeading />
                {props.children}
            </div>
        </section>
    )
}
