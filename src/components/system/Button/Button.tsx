import Link from 'next/link';
import ClassNames from 'classnames';
import styles from './Button.module.scss';

interface IProps extends React.HTMLProps<HTMLButtonElement> {
  href?: string;
  children: string;
  outlined?: boolean;
  className?: string;
  disabled?: boolean;
}

const Button = ({ href, children, onClick, outlined, className, disabled }: IProps) => {
  const classes = ClassNames(
    styles.Button,
    className,
    outlined && styles.outlined,
  );

  const Inner = () => {
    return (
      <button className={classes} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    );
  };

  if (href) {
    return (
      <Link href={href}>
        <Inner />
      </Link>
    );
  }

  return (
    <Inner />
  );
};

export default Button;
