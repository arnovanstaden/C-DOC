// Components
import Layout from "../components/Layout/Layout";
import ContactDetails from "../components/Contact/Contact";
import Landing from "../components/Landing/Landing";

// Styles
import styles from '../styles/pages/contact.module.scss';

export default function Contact() {
    return (
        <Layout
            head={{
                title: "Contact | C-DOC",
                description: "Don't hesitate to get in touch with us if you require more information regarding our services, courses or the products we provide.",
                canonical: "/contact"
            }}
        >
            <Landing
                imageURL="/images/pages/contact/landing.jpeg"
                custom={true}
            >
                <ContactDetails />
            </Landing>

            <div className={styles.grid}>
                <div className={styles.map}>
                    <iframe src="https://snazzymaps.com/embed/289040">
                    </iframe>
                </div>
                <div className={styles.form}>
                    <div className="heading heading--small">
                        <h1>Send us a Message </h1>
                        <span />
                    </div>
                    <form data-netlify="true" name="contact" method="post">
                        <input type="hidden" name="contact" value="contact" />
                        <div className={styles.row}>
                            <label htmlFor="Name">Your Name</label>
                            <input type="text" name="Name" placeholder="Your Name" required />
                        </div>
                        <div className={styles.row}>
                            <label htmlFor="Email">Your Email</label>
                            <input type="email" name="Email" placeholder="Your Email" required />
                        </div>
                        <div className={styles.row}>
                            <label htmlFor="Message">Your Message</label>
                            <textarea name="Message" placeholder="Your Message" required></textarea>
                        </div>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </Layout>
    )
}
