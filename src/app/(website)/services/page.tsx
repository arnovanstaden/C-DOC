import Image from 'next/image';
import Section from '@components/website/layout/Section/Section';
import Landing from '@components/website/content/Landing/Landing';
import Stats from '@components/website/content/Stats/Stats';
import InfoBlock from '@components/website/content/InfoBlock/InfoBlock';
import Cross from '@components/Cross/Cross';
import styles from './ServicesPage.module.scss';
import { generateCustomMetaData } from '@utils/metadata';
import Heading from '@components/website/layout/Heading';

export const metadata = generateCustomMetaData({
  title: 'Services | C-Doc',
  description: 'The C-DOC Team Remains Committed and Dedicated to Safety and Competence',
  image: '/images/pages/services/landing.jpeg',
});

const ServicesPage = () => {
  return (
    <main>
      <Landing
        imageURL="/images/pages/services/landing.jpeg"
      >
        <Heading
          heading={<>The C-DOC Team Remains Committed and Dedicated to <span>Safety and Competence</span>.</>}
          subHeading={<>We service the commercial diving community through:</>}
        />
        <ul>
          <li>
            <Cross size="1rem" />
            Effective Education
          </li>
          <li>
            <Cross size="1rem" />
            Consulting
          </li>
          <li>
            <Cross size="1rem" />
            Equipment Design &amp; Usage.
          </li>
        </ul>
        <p>Our team strives to ensure continued improvement and development for competency and safety in all dive operations inshore and offshore.</p>
      </Landing>

      <Section
        heading="Training"
        className={styles.training}
        idProp="training"
      >
        <div className={styles.grid}>
          <div className={`${styles.left} ${styles.item}`}>
            <p>C-DOC has recently partnered with <span>D+MER</span>, an on line blended learning and competence management system, in order to ensure anyone who is expected to use a certain piece of equipment is familiar with and trained in use of that equipment (reference DMAC 28).</p>

            <p>The C-DOC occupational health team brings together industry specialists with a broad background and skills set to compliment quality assured training.</p>

            <p>All courses are complimented by the D+MER online learning platform. Candidates are required to complete the theory online prior to being enrolled on the respective course at C-DOC training and skills assessment centre in Saldanha Bay, South Africa.</p>
          </div>
          <div className={`${styles.right} ${styles.item}`}>
            <h5>Courses</h5>
            <p>C-DOC training centre in Saldanha Bay has been established since 1999 offering the following training to support commercial diving competency and safety: </p>
            <ul>
              <li>
                <Cross size="1rem" />
                IMCA Diver Medic Training – Full  Course
              </li>
              <li>
                <Cross size="1rem" />
                IMCA Diver Medic Training – Refresher Course
              </li>
              <li>
                <Cross size="1rem" />
                IMCA Trainee Air Diving Supervisor
              </li>
              <li>
                <Cross size="1rem" />
                DMAC 11 First Aid for the Dive Team
              </li>
              <li>
                <Cross size="1rem" />
                DoL Learner Supervisors Training
              </li>
            </ul>
          </div>
        </div>
        {/* <div className={styles.button}>
          <button className="button" onClick={() => handleCoursesToggle()}>
            <p>Book a Course</p>
          </button>
        </div> */}
      </Section>

      <section className={styles.photoGrid}>
        <div className={styles.image}>
          <Image src="/images/pages/services/grid1.jpeg" alt="Article Image" fill />
        </div>
        <div className={styles.image}>
          <Image src="/images/pages/services/grid2.jpeg" alt="Article Image" fill />
        </div>
        <div className={styles.image}>
          <Image src="/images/pages/services/grid3.jpeg" alt="Article Image" fill />
        </div>
      </section>

      <Section
        heading="Consulting."
        className={styles.consulting}
        idProp="consulting"
      >
        <div className={styles.grid}>
          <InfoBlock dark>
            <h4>Log Book and Support Services</h4>
            <p>C-DOC provides a hard copy and electronic log book to ensure appropriate systems control.</p>
            <h5>
              <Cross size="1rem" />
              Helpful Hints
            </h5>
            <p>This product catalogue that has product images to assist with identification of medical equipment.  This will assist personnel with language barriers or limited medical knowledge and terminology.</p>
          </InfoBlock>
          <InfoBlock dark>
            <h4>Additional Medical Equipment and Consulting Services </h4>
            <p>C-DOC offers compliant Inshore First Aid kits with Portable Oxygen as required for inshore diving operations.</p>

            <p>C-DOC offer one-on-one consulting services tailored to the client’s requirements. C-DOC is committed to assisting dive operations be compliant to regulations and recommendations as set out by regulators of industry for best industry, safe practice.</p>
          </InfoBlock>

        </div>
      </Section>

      <Stats />

      <Section
        heading=" Medical Equipment for Commercial Dive Operations."
        className={styles.equipment}
        idProp="equipment"
        colour="lightgrey"
      >
        <div className={styles.button}>
          {/* <button className="button" onClick={() => handleCatalogueToggle()}>
            <p>Equipment Enquiries</p>
          </button> */}
        </div>
        <div className={styles.grid}>
          <InfoBlock>
            <h4>Medical Equipment </h4>
            <p>C-DOC Offshore Medical Kit. Designed by divers, facilitated by the C-DOC occupational health team with specific knowledge and experience in commercial diving operations.</p>

            <h5>
              <Cross size="1rem" />
              Air Diving Operations
            </h5>
            <p><span>DMAC 015:</span> Medical Equipment to be held at an offshore diving operation</p>

            <h5>
              <Cross size="1rem" />
              Saturation Diving Operations
            </h5>
            <p><span>DMAC 028:</span> The Provision of Emergency Medical Care for Divers in Saturation</p>

          </InfoBlock>
          <InfoBlock>
            <h4>Effective Implementation </h4>
            <p>C-DOC has taken the list of medical supplies provided by DMAC and carefully packed the equipment for the purpose of effective implementation and maintenance.</p>

            <p>The module is clearly labelled specific to the emergency response and can be identified by any crew member.</p>

            <p>Clear labelling enables personnel to respond in an efficient manner during the anxiety and confusion of a sudden emergency.</p>
          </InfoBlock>
          <InfoBlock>
            <h4>Common Approach and Functionality </h4>
            <p>C-DOC’s unique design ensures the right people are using the right equipment at the right time in the right place to ensure optimal outcomes, patient safety, care and survival.</p>
            <h5>
              <Cross size="1rem" />
              Functionality
            </h5>
            <p>The systematic, appropriate and clearly labelled kit can be easily identified and used by the Diver Medic Technician (DMT), diver, medic and Doctor alike.</p>
            <h5>
              <Cross size="1rem" />
              Expiry Dates
            </h5>
            <p>Expiry dates are similar where possible and each module is sealed. This ensures time efficiency and facilitates easy compliance</p>
          </InfoBlock>
          <InfoBlock>
            <h4>Quality Control and Turnaround Time </h4>
            <p>The kits are packed by the C-DOC Occupational Health Team with knowledge in commercial diving </p>
            <p>All items are:</p>
            <ul>
              <li>
                <Cross size="1rem" />
                <p>Carefully selected acknowledging the barriers of specific equipment issues when dealing with casualties in remote, confined, hyperbaric environments.</p>
              </li>
              <li>
                <Cross size="1rem" />
                <p>Repacked into durable vacuum packs and sealed to extend shelf life in the high humidity and pressurised environments.</p>
              </li>
              <li>
                <Cross size="1rem" />
                <p>Checked for adult use only and functionality in the appropriate environments.</p>
              </li>
              <li>
                <Cross size="1rem" />
                <p>Easy to restock when module contents expire or if seals have been broken</p>
              </li>
            </ul>
          </InfoBlock>
          <InfoBlock>
            <h4>Industry Alignment  </h4>
            <p>C-DOC offshore medical kits comply with DMAC industry guidance.</p>
            <h5>
              <Cross size="1rem" />
              DMAC 015
            </h5>
            <h5>
              <Cross size="1rem" />
              DMAC 028
            </h5>
            <p>C-DOC occupational health care staff are able to offer consultation to the client’s medical department to advise and agree what facilities and equipment should be available in relation to the specific location.</p>
          </InfoBlock>
          <InfoBlock>
            <h4>Tech Specs</h4>
            <p>There is clear guidance to kit dimensions and weight. All modular equipment is specifically designed to:</p>
            <ul>
              <li>
                <Cross size="1rem" />
                <p>Fit into bells and chambers maintaining good housekeeping</p>
              </li>
              <li>
                <Cross size="1rem" />
                <p>Fit through medical locks and transfer under pressure</p>
              </li>
              <li>
                <Cross size="1rem" />
                <p>Ensure compatibility with the width of deck plates and trunkings</p>
              </li>
            </ul>
            <p>Components are easily identifiable and manageable to maximize the use throughout the dive spreads.</p>
          </InfoBlock>
          <div className={styles.catalogue}>
            <div className={styles.image}>
              <Image src="/images/pages/services/catalogue.jpeg" alt="Article Image" fill />
            </div>
            <div className={styles.text}>
              <h5>Medical Equipment</h5>
              <p>If you’d like to request a quotation or obtain more information regarding any of the medical equipment we provide, please fill out our enquiry form.</p>
              {/* <button className="button-grow light" onClick={() => handleCatalogueToggle()}>
                <a>
                  <span>Equipment Enquiries</span>
                  <i className="icon-arrow-right"></i>
                </a>
              </button> */}
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default ServicesPage;
