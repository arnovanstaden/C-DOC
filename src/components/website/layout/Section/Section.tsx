import classNames from 'classnames';

// Components
import Cross from '../../../Cross/Cross';

// Styles
import styles from './section.module.scss';
import Container from '@components/website/layout/Container/Container';
import Heading from '../Heading';

interface ISection {
  children: React.ReactNode;
  heading?: string;
  subHeading?: string;
  className?: string;
  idProp?: string;
  colour?: 'lightgrey' | 'darkgrey' | 'white';
  noCross?: boolean;
  centerAlign?: boolean;
}

export default function Section({ children, heading, subHeading, noCross, className, idProp, colour = 'white', centerAlign }: ISection) {
  const sectionClasses = classNames(
    styles.Section,
    styles[`colour-${colour}`],
    centerAlign && styles.centerAlign,
    className,
  );

  return (
    <section className={sectionClasses} id={idProp ? idProp : ''}>
      {!noCross ? <Cross classNameProp={styles.cross} size="2rem" /> : null}
      <Container>
        {heading && <Heading heading={heading} subHeading={subHeading} section divider />}
        {children}
      </Container>
    </section>
  );
}
