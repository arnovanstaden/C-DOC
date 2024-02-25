import Link from 'next/link';
import ClassNames from 'classnames';
import styles from './Button.module.scss';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  children: string;
  outlined?: boolean;
  className?: string;
}

const Button = ({ href, children, outlined, className, ...props }: IProps) => {
  const classes = ClassNames(
    styles.Button,
    className,
    outlined && styles.outlined,
  );

  const Inner = () => {
    return (
      <button
        className={classes}
        {...props}
      >
        {children}
      </button >
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
