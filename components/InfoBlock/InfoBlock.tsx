import ClassNames from "classnames";

// Styles
import styles from "./info-block.module.scss";

interface IBlock {
    children: React.ReactNode;
    dark?: boolean;
}

export default function InfoBlock({ children, dark }: IBlock) {

    const blockClasses = ClassNames(
        styles.block,
        dark ? styles.dark : ""
    )

    return (
        <article className={blockClasses}>
            {children}
        </article>
    )
}
