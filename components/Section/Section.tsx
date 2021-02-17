import ClassNames from "classnames";
// Styles
import styles from "./section.module.scss";

type TSection = {
    children: React.ReactNode;
    heading?: string;
    subHeading?: string;
    classNameProp?: string;
    idProp?: string;
    dark?: boolean
}

export default function Section({ children, heading, subHeading, classNameProp, idProp, dark }: TSection) {

    const SectionHeading = (): JSX.Element => {
        if (heading) {
            return (
                <div className="heading">
                    <h1>{heading}</h1>
                    <span />
                    {subHeading ? <p>{subHeading}</p> : null}
                </div>
            )
        }
        return null
    }

    const sectionClasses = ClassNames(
        styles.section,
        classNameProp ? classNameProp : "",
        dark ? styles.dark : ""
    )
    return (
        <section className={sectionClasses} id={idProp ? idProp : ""}>
            {heading ? <img className={styles.cross} src="/images/other/red-cross.svg" alt="Red Cross" /> : null}
            <div className="container">
                <SectionHeading />
                {children}
            </div>
        </section>
    )
}
