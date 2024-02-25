// Components
import ContactDetails from '@components/website/content/Contact/Contact';
import Landing from '@components/website/content/Landing/Landing';

// Styles
import styles from './ContactPage.module.scss';
import { generateCustomMetaData } from '@utils/metadata';
import ContactForm from '@components/website/content/ContactForm/ContactForm';

export const metadata = generateCustomMetaData({
  title: 'Contact | C-DOC',
  description: 'Don\'t hesitate to get in touch with us if you require more information regarding our services, courses or the products we provide.',
  image: '/images/pages/contact/landing.jpeg',
});

const ContactPage = () => {
  return (
    <main>
      <Landing
        imageURL="/images/pages/contact/landing.jpeg"
        custom={true}
      >
        <ContactDetails page />
      </Landing>

      <div className={styles.grid}>
        <div className={styles.map}>
          <iframe src="https://snazzymaps.com/embed/289040">
          </iframe>
        </div>
        <ContactForm />
      </div>
    </main>
  );
};

export default ContactPage;
