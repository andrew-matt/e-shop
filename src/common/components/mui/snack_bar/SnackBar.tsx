import { FC, forwardRef, SyntheticEvent } from 'react';

import { Grow, Slide } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { useDispatch } from 'react-redux';

import { hideSnackBar } from 'common/components/mui/snack_bar/snackBar-reducer';
import { useAppSelector } from 'common/hooks/hooks';

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const SnackBar: FC = () => {
  const dispatch = useDispatch();

  const open = useAppSelector(state => state.snackBar.open);
  const title = useAppSelector(state => state.snackBar.title);
  const severity = useAppSelector(state => state.snackBar.severity);
  const transition = useAppSelector(state => state.snackBar.transition);
  const anchorOrigin = useAppSelector(state => state.snackBar.anchorOrigin);
  const classNames = useAppSelector(state => state.snackBar.classNames);

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

  const snackBarTransition = transition === 'slide' ? Slide : Grow;

  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
      TransitionComponent={snackBarTransition}
      anchorOrigin={anchorOrigin}
      className={classNames.snackBar}
    >
      <Alert
        onClose={handleClose}
        severity={severity}
        sx={{ width: '100%' }}
        className={classNames.alert}
      >
        {title}
      </Alert>
    </Snackbar>
  );
};
