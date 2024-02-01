import classNames from 'classnames'

// Styles
import styles from './notification.module.scss';

export default function Notification() {
    const notificationStyles = classNames(
        styles.notification,
        styles.hidden
    )
    return (
        <div className={notificationStyles}>
            <div className={styles.wrapper}>
                <p className={styles.text}></p>
            </div>
        </div>
    )
}

export const sendNotification = (text: string) => {
    document.querySelector(`.${styles.text}`).innerHTML = text;
    document.querySelector(`.${styles.notification}`).classList.add(styles.animateShow);

    setTimeout(() => {
        document.querySelector(`.${styles.notification}`).classList.remove(styles.animateShow);
        document.querySelector(`.${styles.notification}`).classList.add(styles.animateHide);

        setTimeout(() => {
            document.querySelector(`.${styles.notification}`).classList.remove(styles.animateHide);
        }, 2000);
    }, 5000);
}