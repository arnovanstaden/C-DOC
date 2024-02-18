import Image from 'next/image';

// Components
import Cross from '../../../Cross/Cross';

// Styles
import styles from './team-member.module.scss';

interface TeamMember {
  name: string;
  position: string;
}

export default function TeamMember({ name, position }: TeamMember) {
  const imageName = name.slice(0, name.indexOf(' ')).toLocaleLowerCase() + '.jpg';

  return (
    <article className={styles.member}>

      <div className={styles.image}>
        <Image sizes='10vw' layout="fill" src={`/images/pages/about/team/${imageName}`} alt={`C-DOC Team member - ${name}`} />
      </div>
      <div className={styles.text}>
        <h4>{name}</h4>
        <p>
          <Cross />
          <span>{position}</span>
        </p>
      </div>
    </article>
  )
}
