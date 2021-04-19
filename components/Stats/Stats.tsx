import styles from "./stats.module.scss"

export default function Stats() {

    const initialValues = {
        trainees: 2183,
        equipment: 77,
        experience: 222
    }

    const startDate = new Date('04/19/2021');

    const getValue = (item: number, increment: number, interval: "monthly" | "yearly"): number => {
        const now = new Date;
        let diff = 0;
        let value = 0;
        if (interval === "monthly") {
            diff = Math.round((now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 31));
            value = Math.round(item + (diff * increment))
            return value
        } else {
            diff = Math.round((now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 31 * 12));
            value = Math.round(item + (diff * increment))
            return value
        }
    }

    return (
        <section className={styles.stats}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.item}>
                        <h3>{getValue(initialValues.trainees, 5, "monthly")}</h3>
                        <p>Trainees Successfully Completed Our Courses</p>
                    </div>
                    <div className={styles.item}>
                        <h3>{getValue(initialValues.equipment, 1, "monthly")}</h3>
                        <p>Medical Equipment Packages Sold</p>
                    </div>
                    <div className={styles.item}>
                        <h3>{getValue(initialValues.experience, 7, "yearly")}</h3>
                        <p>Years of Collective Team Experience</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
