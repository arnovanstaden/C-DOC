import ClassNames from 'classnames';

// Components
import Cross from '../../../Cross/Cross';

// Styles
import styles from './section.module.scss';

interface ISection {
  children: React.ReactNode;
  heading?: string;
  subHeading?: string;
  classNameProp?: string;
  idProp?: string;
  dark?: boolean;
  noCross?: boolean
}

export default function Section({ children, heading, subHeading, noCross, classNameProp, idProp, dark }: ISection) {

  const SectionHeading = (): JSX.Element => {
    if (heading) {
      return (
        <div className="heading">
          <h1>{heading}</h1>
          <span />
          {subHeading ? <p>{subHeading}</p> : null}
        </div>
      )
    }
    return null
  }

  const sectionClasses = ClassNames(
    styles.section,
    classNameProp ? classNameProp : '',
    dark ? styles.dark : ''
  )
  return (
    <section className={sectionClasses} id={idProp ? idProp : ''}>
      {!noCross ? <Cross classNameProp={styles.cross} size="2rem" /> : null}
      <div className="container">
        <SectionHeading />
        {children}
      </div>
    </section>
  )
}
