import styles from "./stats.module.scss"

export default function Stats() {
    return (
        <section className={styles.stats}>
            <div className={styles.item}>
                <h3>99+</h3>
                <p>Trainees Successfully Completed Our Courses</p>
            </div>
            <div className={styles.item}>
                <h3>99+</h3>
                <p>Medical Equipment Packages Sold</p>
            </div>
            <div className={styles.item}>
                <h3>99+</h3>
                <p>Years of Collective Team Experience</p>
            </div>
        </section>
    )
}
