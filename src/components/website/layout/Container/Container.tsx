import classNames from 'classnames';
import styles from './Container.module.scss';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = (props) => (
  <div className={classNames(styles.Container, props.className)}>
    {props.children}
  </div>
);

export default Container;
