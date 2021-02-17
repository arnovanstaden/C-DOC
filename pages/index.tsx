import Image from "next/image";
import Link from "next/link";

// Components
import Layout from "../components/Layout/Layout";
import Section from "../components/Section/Section";

// Styles
import styles from '../styles/pages/Home.module.scss';

export default function Home() {
  return (
    <Layout
      head={{
        title: "C-DOC | Commercial Diving and Offshore Consultancy",
        description: "C-DOC Provides Effective Medical Support to the Diving and Maritime Industry.",
        canonical: "/"
      }}
    >

      <Section
        heading="Our Services"
        classNameProp={styles.services}
      >
        <div className={styles.intro}>
          <p>The C-DOC team remains committed and dedicated to safety and competence in the commercial diving community through effective education, consulting, equipment design and usage.</p>

          <p>Our team strives to ensure continued improvement and development for competency and safety in all dive operations inshore and offshore.</p>
        </div>
        <div className={styles.grid}>

          <Link href="services#consulting">
            <a className={styles.item}>
              <div className={styles.image}>
                <Image src="/images/pages/home/consulting.jpeg" layout="fill" alt="C-Doc Service Image - Training" />
              </div>
              <div className={styles.text}>
                <h3>Consulting</h3>
                <p>We offer solutions for Diving Medical Emergency Response Planning. Ensuring the right people with right training and right equipment to ensure optimal outcomes We can do videos and blogs that fall under here or sell consulting session time </p>
                <span className={styles.border}></span>
              </div>
            </a>
          </Link>
          <Link href="services#training">
            <a className={styles.item}>
              <div className={styles.image}>
                <Image src="/images/pages/home/training.jpeg" layout="fill" alt="C-Doc Service Image - Training" />
              </div>
              <div className={styles.text}>
                <h3>Training</h3>
                <p>We offer online and face to face skills development highlighting the barriers that exist in the remote diving and hyperbaric environments. Promoting standardised care for all those involved in diving operations.</p>
                <span className={styles.border}></span>
              </div>
            </a>
          </Link>
          <Link href="services#products">
            <a className={styles.item}>
              <div className={styles.image}>
                <Image src="/images/pages/home/products.jpeg" layout="fill" alt="C-Doc Service Image - Products" />
              </div>
              <div className={styles.text}>
                <h3>Products</h3>
                <p>The C-DOC health and safety team design products with the specific knowledge and experience of commercial diving operations </p>
              </div>
            </a>
          </Link>
        </div>
      </Section>

      <Section
        heading="About Us"
        dark={true}
        classNameProp={styles.about}
      >
        <div className={styles.grid}>
          <Link href="/services#training">
            <a className={`${styles.item} ${styles.imageBlock}`}>
              <div className={styles.image}>
                <Image src="/images/pages/home/courses.jpeg" layout="fill" objectFit="cover" alt="C-Doc Service Image - Consulting" />
              </div>
              <div className={styles.text}>
                <h3>Our Courses</h3>
                <p>C-DOC training centre in Saldanha Bay has been established since 1999 offering training to support commercial diving competency and safety. </p>
              </div>
            </a>
          </Link>
          <Link href="/about#story">
            <a className={`${styles.item} ${styles.textBlock}`}>
              <h3>Our Story</h3>
              <p>C-DOC was established in 1999 to ensure an accessible service for products, education and skills development to support health and safety during diving operations. </p>
            </a>
          </Link>
          <Link href="/news">
            <a className={`${styles.item} ${styles.textBlock}`}>
              <h3>Latest News</h3>
              <p>Stay up to date with the latest news of C-DOC and the industry we operate in and learn the impact we make in our community.</p>
            </a>
          </Link>
          <Link href="/about#team">
            <a className={`${styles.item} ${styles.imageBlock}`}>
              <div className={styles.image}>
                <Image src="/images/pages/home/team.jpg" layout="fill" objectFit="cover" alt="C-Doc Service Image - Consulting" />
              </div>
              <div className={styles.text}>
                <h3>Our Courses</h3>
                <p>C-DOC training centre in Saldanha Bay has been established since 1999 offering training to support commercial diving competency and safety. </p>
              </div>
            </a>
          </Link>
        </div>
      </Section>


      <Section
        classNameProp={styles.contact}
      // fullScreen={true}
      >
        <div className={styles.grid}>
          <div className={styles.map}>
            <iframe src="https://snazzymaps.com/embed/289040"></iframe>
          </div>
          <div className={styles.details}>
            <div className={styles.heading}>
              <h1>Contact Us</h1>
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
        </div>
      </Section>


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

    </Layout >
  )
}
