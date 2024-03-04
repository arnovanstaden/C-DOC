import { useState } from 'react';
import styles from './FilePreview.module.scss';
import Button from '@components/system/Button/Button';
import Input, { IPropsRegister } from '@components/system/Input';
import classNames from 'classnames';
import { Box, Modal } from '@mui/material';

interface FilePreviewPropsBase {
  inputProps: Omit<IPropsRegister, 'register'> & {
    register: any;
    required?: boolean;
  };
  customRemove?: () => Promise<void>;
}

interface FilePreviewProps extends FilePreviewPropsBase {
  file?: string;
  type: 'image' | 'document';
}

interface FilePreviewMultipleProps extends FilePreviewPropsBase {
  type: 'images';
  files?: string[];
}

const FilePreview: React.FC<FilePreviewProps | FilePreviewMultipleProps> = ({ inputProps, ...props }) => {
  const [newFile, setNewFile] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleCustomRemove = async () => {
    setOpenDeleteModal(false);
    await props.customRemove();
  };

  const classes = classNames(
    styles.FilePreview,
    props.type === 'images' && styles.multiple,
  );

  if (props.type === 'images') {
    return (
      <div className={classes}>
        {(newFile || !props.files || props.files.length === 0)
          ? (
            <Input {...inputProps} register={inputProps.register(inputProps.name, { required: inputProps.required })} />
          )
          : (
            <>
              <div className={styles.top}>
                <label >{inputProps.label}</label>
                <button onClick={props.customRemove ? () => setOpenDeleteModal(true) : () => setNewFile(true)} type="button">Remove</button>
              </div>
              <div className={styles.imageContainer}>
                {props.files?.map((file, index) => (
                  <a href={file} target="_blank" key={index}>
                    <img src={file} alt="preview" />
                  </a>
                ))}
              </div>
            </>
          )
        }
        {props.customRemove && (
          <Modal
            open={openDeleteModal}
            onClose={() => setOpenDeleteModal(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className={styles.deleteModal}>
              Are you sure you want to remove {inputProps.label}? This action cannot be undone.
              <div className={styles.actions}>
                <Button outlined onClick={() => setOpenDeleteModal(false)}>
                  Cancel
                </Button>
                <Button onClick={handleCustomRemove}>
                  {`Remove ${inputProps.label}`}
                </Button>
              </div>
            </Box>
          </Modal>
        )}
      </div>
    );
  }

  return (
    <div className={classes}>
      {(newFile || !props.file)
        ? (
          <Input {...inputProps} register={inputProps.register(inputProps.name, { required: inputProps.required })} />
        )
        : props.type === 'image'
          ? (
            <>
              <div className={styles.top}>
                <label >{inputProps.label}</label>
                <button onClick={() => setNewFile(true)} type="button">Remove</button>
              </div>
              <div className={styles.imageContainer}>
                <img src={props.file} alt="preview" />
              </div>
            </>
          )
          : (
            <>
              <div className={styles.top}>
                <label >{inputProps.label}</label>
                <button onClick={() => setNewFile(true)} type="button">Remove</button>
              </div>
              <Button type="button" href={props.file} target="_blank" >
                View File
              </Button>
            </>
          )
      }
    </div>
  );
};

export default FilePreview;
