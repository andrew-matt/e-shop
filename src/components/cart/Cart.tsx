import { FC, ReactNode, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import style from './Cart.module.scss';

import emptyCart from 'assets/app_images/empty-cart.png';
import { updateCart } from 'components/cart/cart-reducer';
import { selectGoodsFromCart } from 'components/cart/cart-selectors';
import { CartList } from 'components/cart/cart_list/CartList';
import { CartOrder } from 'components/cart/cart_order/CartOrder';

export const Cart: FC = () => {
  const dispatch = useDispatch();
  const goodsInCart = useSelector(selectGoodsFromCart);

  useEffect(() => {
    dispatch(updateCart());
  }, [dispatch, goodsInCart]);

  const showEmptyCart = (): ReactNode => {
    if (goodsInCart.length === 0) {
      return (
        <div className={style.imageContainer}>
          <img src={emptyCart} alt="empty-cart" className={style.image} />
          <div className={style.text}>Ваша корзина пуста</div>
        </div>
      );
    }
  };

  return (
    <div className={style.container}>
      {showEmptyCart() || (
        <div className={style.cart}>
          <CartList />
          <CartOrder />
        </div>
      )}
    </div>
  );
};
