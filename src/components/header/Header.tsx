import { FC, MouseEvent, useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import cartIcon from 'assets/icons/cart.svg';
import userIcon from 'assets/icons/user.svg';
import { CustomBadge } from 'common/components/badge/Badge';
import { PreloaderLinear } from 'common/components/preloaders/preloader_linear/PreloaderLinear';
import { signOut } from 'components/auth/auth-sagas';
import {
  selectGoodsAmount,
  selectIsFetching,
  selectIsLoggedIn,
} from 'components/header/header-selectors';
import style from 'components/header/Header.module.scss';

export const Header: FC = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isFetching = useSelector(selectIsFetching);
  const goodsAmount = useSelector(selectGoodsAmount);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const navigate = useNavigate();

  const handleMenu = (event: MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const onLogoClickHandler = (): void => {
    navigate('/');
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

  const onCartButtonClickHandler = (): void => navigate('/cart');

  return (
    <Box>
      <AppBar position="static">
        <Toolbar className={style.toolbar}>
          <Button onClick={onLogoClickHandler}>
            <div className={style.logo}>E-shop</div>
          </Button>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <img src={userIcon} alt="user-icon" className={style.icon} />
            </IconButton>
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
              {isLoggedIn ? (
                <div>
                  <MenuItem onClick={onMyOrdersButtonClickHandler}>My orders</MenuItem>
                  <MenuItem onClick={onSignOutButtonClickHandler}>Sign out</MenuItem>
                </div>
              ) : (
                <MenuItem onClick={onSignInButtonClickHandler}>Sign in</MenuItem>
              )}
            </Menu>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={onCartButtonClickHandler}
              color="inherit"
            >
              <CustomBadge badgeContent={goodsAmount}>
                <img src={cartIcon} alt="cart-icon" className={style.icon} />
              </CustomBadge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {isFetching && <PreloaderLinear />}
    </Box>
  );
};
