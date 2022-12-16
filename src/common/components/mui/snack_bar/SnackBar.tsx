import { FC, forwardRef, SyntheticEvent } from 'react';

import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { useDispatch, useSelector } from 'react-redux';

import { hideSnackBar } from 'common/components/mui/snack_bar/snackBar-reducer';
import {
  selectOpen,
  selectSeverity,
  selectTitle,
} from 'common/components/mui/snack_bar/snackBar-selectors';

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const SnackBar: FC = () => {
  const dispatch = useDispatch();

  const open = useSelector(selectOpen);
  const title = useSelector(selectTitle);
  const severity = useSelector(selectSeverity);

  const titleLength = 45;
  const minAutoHideDuration = 3000;
  const maxAutoHideDuration = 6000;

  const autoHideDuration =
    title.length < titleLength ? minAutoHideDuration : maxAutoHideDuration;

  const handleClose = (event?: SyntheticEvent | Event, reason?: string): void => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(hideSnackBar());
  };

  return (
    <Snackbar open={open} autoHideDuration={autoHideDuration} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
        {title}
      </Alert>
    </Snackbar>
  );
};
