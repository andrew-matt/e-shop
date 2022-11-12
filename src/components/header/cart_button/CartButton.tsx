import { FC } from 'react';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import style from 'components/header/cart_button/CartButton.module.scss';

export const CartButton: FC = () => {
  return (
    <div className={style.button}>
      <ShoppingCartIcon color="primary" />
      <span className={style.text}>Корзина</span>
    </div>
  );
};
