'use client';

import styles from './ContactForm.module.scss';
import { enqueueSnackbar } from 'notistack';

const ContactForm: React.FC = () => {
  const submitContactForm = (e) => {
    const enquiry = {};
    e.preventDefault();
    const form = document.getElementById('contact-form') as HTMLFormElement;
    const formData = new FormData(form);
    formData.forEach((value, key) => enquiry[key] = value);

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/enquiry/contact`, {
      method: 'post',
      body: JSON.stringify(enquiry),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
        enqueueSnackbar('Thank you for your message. We\'ll get back to you soon!');
        form.reset();
      })
      .catch(err => console.error(err));
  };

  return (
    <div className={styles.ContactForm}>
      <div className={styles.form}>
        <div className="heading heading--small">
          <h1>Send us a Message.</h1>
          <span />
        </div>
        <form name="contact-form" id="contact-form">
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
          <button type="submit" className="button" onClick={(e) => submitContactForm(e)}>
            <p>Send</p>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
