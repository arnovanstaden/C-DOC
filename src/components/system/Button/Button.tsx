import Link from 'next/link';
import ClassNames from 'classnames';
import styles from './Button.module.scss';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  children: React.ReactNode;
  outlined?: boolean;
  className?: string;
  target?: HTMLAnchorElement['target'];
}

const Button = ({ href, children, outlined, className, target, ...props }: IProps) => {
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
      <Link href={href} target={target}>
        <Inner />
      </Link>
    );
  }

  return (
    <Inner />
  );
};

export default Button;
