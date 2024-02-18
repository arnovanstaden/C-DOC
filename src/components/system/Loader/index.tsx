import { Backdrop, CircularProgress } from '@mui/material';

const Loader: React.FC<{ open: boolean }> = ({ open }) => {
  return (
    <Backdrop open={open}>
      <CircularProgress />
    </Backdrop>
  );
};

export default Loader;
