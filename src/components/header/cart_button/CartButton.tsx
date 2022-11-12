import { FC, ReactNode } from 'react';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';

import { selectGoodsTotalCount } from 'components/header/cart_button/cart-button-selectors';
import style from 'components/header/cart_button/CartButton.module.scss';

export const CartButton: FC = () => {
  const goodsTotalCount = useSelector(selectGoodsTotalCount);

  const showGoodsTotalCount = (): ReactNode => {
    if (goodsTotalCount > 0) {
      return <span className={style.notification}>{goodsTotalCount}</span>;
    }
  };

  return (
    <div className={style.button}>
      <div className={style.iconWrapper}>
        <ShoppingCartIcon color="primary" />
        {showGoodsTotalCount()}
      </div>
      <span className={style.text}>Корзина</span>
    </div>
  );
};
