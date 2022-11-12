import { FC } from 'react';

import style from './Header.module.scss';

import { CartButton } from 'components/header/cart_button/CartButton';

export const Header: FC = () => {
  return (
    <div className={style.header}>
      <CartButton />
    </div>
  );
};
