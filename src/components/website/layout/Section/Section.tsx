import classNames from 'classnames';

// Components
import Cross from '../../../Cross/Cross';

// Styles
import styles from './section.module.scss';
import Container from '@components/website/layout/Container/Container';

interface ISection {
  children: React.ReactNode;
  heading?: string;
  subHeading?: string;
  className?: string;
  idProp?: string;
  colour?: 'lightgrey' | 'darkgrey' | 'white';
  noCross?: boolean
}

export default function Section({ children, heading, subHeading, noCross, className, idProp, colour = 'white' }: ISection) {
  const sectionClasses = classNames(
    styles.Section,
    styles[`colour-${colour}`],
    className,
  );

  return (
    <section className={sectionClasses} id={idProp ? idProp : ''}>
      {!noCross ? <Cross classNameProp={styles.cross} size="2rem" /> : null}
      <Container>
        {heading && (
          <div className={styles.heading}>
            {heading && <h1>{heading}</h1>}
            <span />
            {subHeading && <p>{subHeading}</p>}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
