import { Dispatch, FC, ReactNode, SetStateAction } from 'react';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from 'common/hooks/hooks';
import { signOut } from 'components/auth/auth-sagas';

type ProfileMenuPropsType = {
  anchorEl: HTMLElement | null;
  setAnchorEl: Dispatch<SetStateAction<HTMLElement | null>>;
};

export const ProfileMenu: FC<ProfileMenuPropsType> = ({ anchorEl, setAnchorEl }) => {
  const dispatch = useDispatch();

  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);

  const navigate = useNavigate();

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const onSignInButtonClickHandler = (): void => {
    navigate('/login');
    setAnchorEl(null);
  };

  const onMyOrdersButtonClickHandler = (): void => {
    navigate('/user-orders');
    setAnchorEl(null);
  };

  const onSignOutButtonClickHandler = (): void => {
    dispatch(signOut());
    setAnchorEl(null);
  };

  const handleMenuItems = (): ReactNode => {
    if (isLoggedIn) {
      return (
        <div>
          <MenuItem onClick={onMyOrdersButtonClickHandler}>My orders</MenuItem>
          <MenuItem onClick={onSignOutButtonClickHandler}>Sign out</MenuItem>
        </div>
      );
    }

    return <MenuItem onClick={onSignInButtonClickHandler}>Sign in</MenuItem>;
  };

  return (
    <Menu
      id="menu-appbar"
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      {handleMenuItems()}
    </Menu>
  );
};
