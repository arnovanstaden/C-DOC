import { enqueueSnackbar } from 'notistack';

export const errorNotification = (message: string, error?: Error | unknown) => enqueueSnackbar(
  <div>
    <p>{message}</p>
    {(error && error instanceof Error) ? <p>Error: {error.message}</p> : undefined}
  </div>
)