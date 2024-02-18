'use client';

import { SnackbarProvider } from 'notistack';

const ProviderWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <SnackbarProvider
      maxSnack={2}
      autoHideDuration={4000}
      preventDuplicate
      anchorOrigin={{
        horizontal: 'center',
        vertical: 'top',
      }}
      style={{ whiteSpace: 'pre-line' }}
      disableWindowBlurListener
    >
      {children}
    </SnackbarProvider>
  );
};

export default ProviderWrapper;
