import { FC, ReactNode, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import style from './Cart.module.scss';

import emptyCart from 'assets/app_images/empty-cart.png';
import { Preloader } from 'common/components/preloader/Preloader';
import { updateCart } from 'components/cart/cart-reducer';
import { selectGoodsFromCart } from 'components/cart/cart-selectors';
import { CartList } from 'components/cart/cart_list/CartList';
import { CartOrder } from 'components/cart/cart_order/CartOrder';

export const Cart: FC = () => {
  const dispatch = useDispatch();
  const goodsInCart = useSelector(selectGoodsFromCart);

  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    dispatch(updateCart());
  }, [dispatch, goodsInCart]);

  const showEmptyCart = (): ReactNode => {
    if (goodsInCart.length === 0) {
      const onImageLoadHandler = (): void => setImageLoading(false);

      return (
        <div className={style.imageContainer}>
          <img
            src={emptyCart}
            alt="empty-cart"
            className={`${style.image} ${imageLoading && style.imageLoading}`}
            onLoad={onImageLoadHandler}
          />
          {imageLoading ? (
            <Preloader />
          ) : (
            <div className={style.text}>Ваша корзина пуста</div>
          )}
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
