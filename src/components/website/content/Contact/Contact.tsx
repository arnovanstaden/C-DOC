import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import styles from './contact.module.scss';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
interface IContact {
  page?: boolean;
}

export default function Contact({ page }: IContact) {
  return (
    <div className={`${styles.details} ${page ? styles.page : ''}`}>
      <div className="heading heading--small">
        <h1>Contact Us.</h1>
        <span />
      </div>
      <p>Don't hesitate to get in touch with us if you require more information regarding our services, courses or the products we provide.</p>
      <ul className={styles.options}>
        <li>
          <LocalPhoneIcon className={styles.icon} />
          <a href="tel:+27827716351">+27 82 771 6351 / +27 22 714 0222 </a>
        </li>
        <li >
          <WhatsAppIcon className={styles.icon} />
          <a href="https://wa.me/+27760972523" target="blank">+27 76 097 2523</a>
        </li>
        <li>
          <EmailIcon className={styles.icon} />
          <a href="mailto:info@c-doc.co.za">info@c-doc.co.za</a>
        </li>
        <li>
          <LocationOnIcon className={styles.icon} />
          <a href="https://goo.gl/maps/XLbwP14yF4yy43w2A" target="blank">23 Main Rd, Saldanha, 7395, Western Cape, South Africa</a>
        </li>
      </ul>
      <ul className={styles.social}>
        <li>
          <a href="https://www.facebook.com/cdocsa/" target="blank">
            <FacebookIcon className={styles.icon} />
          </a>
        </li>
      </ul>
    </div>
  );
};
