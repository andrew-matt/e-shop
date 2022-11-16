import { FC } from 'react';

import style from './Cart.module.scss';

// import emptyCart from 'assets/app_images/empty-cart.png';
import { CartList } from 'components/cart/cart_list/CartList';
import { CartOrder } from 'components/cart/cart_order/CartOrder';

export const Cart: FC = () => {
  return (
    <div className={style.container}>
      <div className={style.cart}>
        <CartList />
        <CartOrder />
      </div>
      {/* {false && (
        <>
          <img src={emptyCart} alt="empty-cart" className={style.image} />
          <div className={style.text}>Ваша корзина пуста</div>
        </>
      )} */}
    </div>
  );
};
