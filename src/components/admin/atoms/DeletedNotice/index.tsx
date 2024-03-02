import styles from './DeletedNotice.module.scss';

const DeletedNotice: React.FC = () => {
  return (
    <div className={styles.DeletedNotice}>
      <h4>This Record has been deleted and is only displayed for reference purposes.
        <br />
        It will not display in the admin dashboard lists, or on the website</h4>
    </div>
  );
};

export default DeletedNotice;
