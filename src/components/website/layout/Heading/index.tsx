import classNames from 'classnames';
import styles from './styles.module.scss';

interface HeadingProps {
  heading: React.ReactNode;
  subHeading?: React.ReactNode;
  section?: boolean;
  divider?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ heading, subHeading, section, divider }) => {
  const classes = classNames(
    styles.Heading,
    {
      [styles.section]: section,
    }
  );

  return (
    <div className={classes}>
      {heading && <h1>{heading}</h1>}
      {divider && <span className={styles.divider} />}
      {subHeading && <p>{subHeading}</p>}
    </div>
  );
};

export default Heading;
