import Image from 'next/image';

// Components
import Header from '../../layout/Header/Header';

// Styles
import styles from './landing.module.scss';

interface TLanding {
  children: React.ReactNode;
  imageURL: string;
  custom?: boolean;
}

export default function Landing(props: TLanding) {
  return (
    <section className={styles.landing}>
      <div className={styles.content}>
        <Header />
        {props.custom ? props.children :
          <div className={styles.text}>
            {props.children}
          </div>
        }
      </div>
      <div className={styles.image}>
        <Image priority fill alt="C-DOC Landing Image" src={props.imageURL} />
      </div>
    </section>
  )
}
