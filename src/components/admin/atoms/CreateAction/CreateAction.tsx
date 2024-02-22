import Button from '@components/system/Button/Button';
import styles from './CreateAction.module.scss';

interface CreateActionProps {
  label: string;
  href: string;
}

const CreateAction: React.FC<CreateActionProps> = (props) => {
  return (
    <div className={styles.CreateAction}>
      <Button href={props.href}>
        {props.label}
      </Button>
    </div>
  );
};

export default CreateAction;
