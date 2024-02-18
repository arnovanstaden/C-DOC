import Image from 'next/image';
import Link from 'next/link';
import Section from '@components/website/layout/Section/Section';
import Landing from '@components/website/content/Landing/Landing';
import Contact from '@components/website/content/Contact/Contact';
import Stats from '@components/website/content/Stats/Stats';
import Cross from '@components/Cross/Cross';
import styles from './HomePage.module.scss';
import { generateCustomMetaData } from '@utils/metadata';

export const metadata = generateCustomMetaData({
  title: 'C-DOC | Commercial Diving and Offshore Consultancy',
  description: 'C-DOC Provides Effective Medical Support to the Diving and Maritime Industry.',
});


const HomePage = () => {
  return (
    <main>
      <Landing
        imageURL="/images/pages/home/landing.jpeg"
      >
        <h1>Providing Effective <span>Medical Support</span> to the Diving and Maritime Industry.</h1>
        <p>The C-DOC team remain <span>committed and dedicated to safety and competence</span> in the commercial diving community through effective education, consulting, equipment design and usage. We offer:</p>
        <ul>
          <li>
            <Cross />
            Consultation &amp; Skills Training
          </li>
          <li>
            <Cross />
            Medical Kits for Vessels &amp; Diving Operations
          </li>
          <li>
            <Cross />
            Maritime Pharmaceutical Services
          </li>
        </ul>
        {/* <div className={styles.landingButtons} >
          <button className="button" onClick={() => handleCoursesToggle()}>
            <p>Book A Course</p>
          </button>
          <button className="button" onClick={() => handleCatalogueToggle()}>
            <p>Order / Enquire About Medical Equipment</p>
          </button>
        </div> */}
      </Landing>

      <Section
        heading="Our Services."
        classNameProp={styles.services}
      >
        <div className={styles.intro}>
          <p>The C-DOC team remains committed and dedicated to safety and competence in the commercial diving community through effective education, consulting, equipment design and usage.</p>

          <p>Our team strives to ensure continued improvement and development for competency and safety in all dive operations inshore and offshore.</p>
        </div>
        <div className={styles.grid}>

          <Link href="/services#consulting">
            <article className={styles.item}>
              <div className={styles.image}>
                <div className="next-image next-image--intrinsic">
                  <Image src="/images/pages/home/consulting.jpeg" fill alt="C-Doc Service Image - Training" />
                </div>
              </div>
              <div className={styles.text}>
                <h3>Consulting</h3>
                <p>We offer solutions for Diving Medical Emergency Response Planning. Ensuring the right people with right training and right equipment to ensure optimal outcomes We can do videos and blogs that fall under here or sell consulting session time </p>
              </div>
            </article>
          </Link>
          <Link href="/services#training">
            <article className={styles.item}>
              <div className={styles.image}>
                <div className="next-image next-image--intrinsic">
                  <Image src="/images/pages/home/training.jpeg" fill alt="C-Doc Service Image - Training" />
                </div>
              </div>
              <div className={styles.text}>
                <h3>Training</h3>
                <p>We offer online and face to face skills development highlighting the barriers that exist in the remote diving and hyperbaric environments. Promoting standardised care for all those involved in diving operations.</p>
              </div>
            </article>
          </Link>
          <Link href="/services#equipment">
            <article className={styles.item}>
              <div className={styles.image}>
                <div className="next-image next-image--intrinsic">
                  <Image src="/images/pages/home/products.jpeg" fill alt="C-Doc Service Image - Products" />
                </div>
              </div>
              <div className={styles.text}>
                <h3>Equipment</h3>
                <p>The C-DOC health and safety team design products with the specific knowledge and experience of commercial diving operations </p>
              </div>
            </article>
          </Link>
        </div>
      </Section>

      <Section
        heading="About Us."
        dark={true}
        classNameProp={styles.about}
      >
        <div className={styles.grid}>
          <Link href="/services#training" className={`${styles.item} ${styles.imageBlock}`}>
            <div className={styles.image}>
              <Image src="/images/pages/home/courses.jpeg" fill alt="C-Doc Service Image - Consulting" />
            </div>
            <div className={styles.text}>
              <h3>Our Courses</h3>
              <p>C-DOC training centre in Saldanha Bay has been established since 1999 offering training to support commercial diving competency and safety. </p>
            </div>
          </Link>
          <Link href="/about#story" className={`${styles.item} ${styles.textBlock}`}>
            <h3>Our Story</h3>
            <p>C-DOC was established in 1999 to ensure an accessible service for products, education and skills development to support health and safety during diving operations. </p>
          </Link>
          <Link href="/news" className={`${styles.item} ${styles.textBlock}`}>
            <h3>Latest News</h3>
            <p>Stay up to date with the latest news of C-DOC and the industry we operate in and learn the impact we make in our community.</p>
          </Link>
          <Link href="/about#team" className={`${styles.item} ${styles.imageBlock}`}>
            <div className={styles.image}>
              <Image src="/images/pages/home/team.jpeg" fill alt="C-Doc Service Image - Consulting" />
            </div>
            <div className={styles.text}>
              <h3>Meet The Team</h3>
              <p>The C-DOC occupational health team brings together industry specialists with a broad background and skills set to compliment quality assured training.  </p>
            </div>
          </Link>
        </div>
      </Section>


      <Section
        classNameProp={styles.contact}
        noCross={true}
      >
        <div className={styles.grid}>
          <div className={styles.map}>
            <iframe src="https://snazzymaps.com/embed/289040"></iframe>
          </div>
          <div className={styles.details}>
            <Contact />
          </div>
        </div>
      </Section>

      <Stats />

      {/* <Catalogue handleCatalogueToggle={() => handleCatalogueToggle()} />
      <Courses handleCoursesToggle={() => handleCoursesToggle()} courses={courses} /> */}
    </main >
  );
};

export default HomePage;
