import Image from 'next/image';
import Section from '@components/website/layout/Section/Section';
import Landing from '@components/website/content/Landing/Landing';
import TeamMember from '@components/website/content/TeamMember/TeamMember';
import Cross from '@components/Cross/Cross';
import styles from './AboutPage.module.scss';
import teamMembers from '../../../assets/data/team.json';
import { generateCustomMetaData } from '@utils/metadata';

export const metadata = generateCustomMetaData({
  title: 'About | C-Doc',
  description: 'Providing Effective Medical Support for 22 Years and Counting.',
});

const AboutPage = () => {
  return (
    <main>
      <Landing
        imageURL="/images/pages/about/landing.jpeg"
      >
        <h1>Providing Effective <span>Medical Support</span> for 22 Years and Counting.</h1>
        <p>C-DOC was <span>established in 1999</span> to ensure an accessible service for:</p>
        <ul>
          <li>
            <Cross />
            Products
          </li>
          <li>
            <Cross />
            Education
          </li>
          <li>
            <Cross />
            Skills Development
          </li>
        </ul>
        <p>and  to support health and safety during diving operations. </p>
      </Landing>

      <Section
        heading="Our Story."
        className={styles.story}
        idProp="story"
      >
        <p>C-DOC’s founder member and subject matter expert is Bridget Thomson. Bridget and her highly skilled and experienced team remain committed and dedicated to safety and competence in the commercial diving community through effective education, consulting, equipment design and usage. The team strive to ensure continued improvement and development for competency and safety in all dive operations inshore and offshore.</p>

      </Section>

      <Section
        heading="Meet the Team."
        className={styles.team}
        colour="lightgrey"
        idProp="team"
      >
        <div className={styles.grid}>
          {teamMembers.map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </div>
      </Section>

      <Section
        heading="Affiliations &amp; Memberships."
        className={styles.memberships}
      >
        <div className={styles.grid}>
          <a className={styles.image} href="http://dmerworldwide.com/" target="blank">
            <Image src="/images/pages/about/memberships/01-DMER.jpg" alt="Membership Logo" fill />
          </a>
          <a className={styles.image} href="https://www.saoga.org.za/web/homepage" target="blank">
            <Image src="/images/pages/about/memberships/03-SAOGA.png" alt="Membership Logo" fill />
          </a>
          <a className={styles.image} href="http://www.sauhma.org/" target="blank">
            <Image src="/images/pages/about/memberships/04-SAUHMA.jpg" alt="Membership Logo" fill />
          </a>
          <a className={styles.image} href="https://www.oceans-alive.org/" target="blank">
            <Image src="/images/pages/about/memberships/05-Oceans Alive.png" alt="Membership Logo" fill />
          </a>
          <a className={styles.image} href="https://www.saambr.org.za/" target="blank">
            <Image src="/images/pages/about/memberships/06-SAAMBR.jpg" alt="Membership Logo" fill />
          </a>
          <a className={styles.image} href="https://www.imca-int.com/" target="blank">
            <Image src="/images/pages/about/memberships/02-IMCA.jpg" alt="Membership Logo" fill />
          </a>
        </div>
      </Section>

      <Section
        heading="Partnership."
        className={styles.partnership}
        colour="lightgrey"

      >
        <div className={styles.intro}>
          <p>C-DOC has partnered with <span>D+MER</span></p>
        </div>
        <div className={styles.grid}>
          <div className={styles.text}>
            <Cross size="1.5rem" />
            <p> D+MER is an online blended learning and competence management system, in order to ensure anyone who is expected to use a certain piece of equipment is familiar with and trained in use of that equipment.</p>
          </div>
          <div className={styles.image}>
            <Image fill src="/images/pages/about/partnership.jpeg" alt="Article Image" />
          </div>
          <div className={styles.text}>
            <Cross size="1.5rem" />
            <p> D+MER ensures easy access to skills development and indicates quality assurance, giving industry the confidence in knowing that there is a robust quality check on training which is cross referenced to industry guidance. </p>
          </div>
        </div>
        <div className={styles.button}>
          <button className="button button--border">
            <a target="blank" href="http://dmerworldwide.com/">Learn More</a>
          </button>
        </div>
      </Section>

      <Section
        colour="darkgrey"
        heading="Value for Money."
        className={styles.value}
      >
        <p>C-DOC services and products are designed to support companies to meet their audit compliance and strengthen their operational dive teams in order to move people and their performance in new directions. </p>
      </Section>
    </main >
  );
};

export default AboutPage;
