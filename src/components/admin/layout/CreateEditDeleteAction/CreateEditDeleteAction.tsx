'use client';

import Link from 'next/link';
import styles from './CreateEditDeleteAction.module.scss';
import Loader from '@components/system/Loader';
import { useState } from 'react';
import Button from '@components/system/Button/Button';
import { Box, Modal } from '@mui/material';
import { useRouter } from 'next/navigation';

interface ActionProps {
  actionText: string;
  actionOnClick: () => Promise<void>;
  delete?: {
    deleteOnClick: () => Promise<void>;
  }
}

const CreateEditDeleteAction: React.FC<ActionProps> = (props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    setLoading(true);
    await props.actionOnClick();
    setLoading(false);
  };

  return (
    <div className={styles.CreateEditDeleteAction}>
      <Link href="/admin/courses">
        <Button onClick={() => router.back()}>
          Cancel
        </Button>
      </Link>
      <div>
        {!props.delete && (
          <Button onClick={() => setOpenDeleteModal(true)} outlined>
            Delete
          </Button>
        )}
        <Button onClick={props.actionOnClick} outlined>
          {props.actionText}
        </Button>
      </div>
      <Modal
        open={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.deleteModal}>
          Are you sure you want to delete this course? This action cannot be undone.
          <div className={styles.actions}>
            <Button outlined onClick={() => setOpenDeleteModal(false)}>
              Cancel
            </Button>
            <Button onClick={handleDelete}>
              Delete Course
            </Button>
          </div>
        </Box>
      </Modal>
      <Loader open={loading} />
    </div>
  );
};

export default CreateEditDeleteAction;
