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
    text: string;
    deleteOnClick: () => Promise<void>;
  }
}

const CreateEditDeleteAction: React.FC<ActionProps> = (props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    setOpenDeleteModal(false);
    setLoading(true);
    await props.delete.deleteOnClick();
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
        {props.delete && (
          <Button onClick={() => setOpenDeleteModal(true)} outlined>
            Delete
          </Button>
        )}
        <Button onClick={props.actionOnClick} outlined>
          {props.actionText}
        </Button>
      </div>
      {props.delete && (
        <Modal
          open={openDeleteModal}
          onClose={() => setOpenDeleteModal(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className={styles.deleteModal}>
            {props.delete.text}
            <div className={styles.actions}>
              <Button outlined onClick={() => setOpenDeleteModal(false)}>
                Cancel
              </Button>
              <Button onClick={handleDelete}>
                Delete
              </Button>
            </div>
          </Box>
        </Modal>
      )}
      <Loader open={loading} />
    </div>
  );
};

export default CreateEditDeleteAction;
