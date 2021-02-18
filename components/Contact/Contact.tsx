
// Styles
import styles from "./contact.module.scss";

export default function Contact() {
    return (

        <div className={styles.details}>
            <div className="heading heading--small">
                <h1>Contact Us.</h1>
                <span />
            </div>
            <p>Don't hesitate to get in touch with us if you require more information regarding our services, courses or the products we provide.</p>
            <ul className={styles.options}>
                <li>
                    <i className="icon-phone"></i>
                    <a href="tel:+27760972523">+27 76 097 2523</a>
                </li>
                <li >
                    <i className="icon-whatsapp"></i>
                    <a href="https://wa.me/+27760972523" target="blank">+27 76 097 2523</a>
                </li>
                <li>
                    <i className="icon-mail"></i>
                    <a href="mailto:info@c-doc.co.za">info@c-doc.co.za</a>
                </li>
                <li>
                    <i className="icon-location_pin"></i>
                    <a href="https://goo.gl/maps/XLbwP14yF4yy43w2A" target="blank">23 Main Rd, Saldanha, 7395, Western Cape, South Africa</a>
                </li>
            </ul>
            <ul className={styles.social}>
                <li>
                    <a href="" target="blank">
                        <i className="icon-facebook1"></i>
                    </a>
                </li>
                <li>
                    <a href="" target="blank">
                        <i className="icon-instagram"></i>
                    </a>
                </li>
            </ul>
        </div>
    )
}
