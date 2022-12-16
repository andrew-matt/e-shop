import { FC } from 'react';

import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';

import cartIcon from 'assets/icons/cart.svg';
import { CustomBadge } from 'common/components/mui/custom_badge/Badge';
import { useAppSelector } from 'common/hooks/hooks';
import style from 'components/header/Header.module.scss';

export const CartButton: FC = () => {
  const goodsAmount = useAppSelector(state => state.cart.goodsAmount);

  const navigate = useNavigate();

  const onCartButtonClickHandler = (): void => navigate('/cart');

  return (
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
  );
};
