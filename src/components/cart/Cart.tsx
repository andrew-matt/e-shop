import { FC, ReactNode, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import style from './Cart.module.scss';

import emptyCart from 'assets/app_images/empty-cart.png';
import { PreloaderCircular } from 'common/components/preloaders/preloader_circular/PreloaderCircular';
import { updateCart } from 'components/cart/cart-reducer';
import { selectGoodsFromCart } from 'components/cart/cart-selectors';
import { CartList } from 'components/cart/cart_list/CartList';
import { CartOrder } from 'components/cart/cart_order/CartOrder';

export const Cart: FC = () => {
  const dispatch = useDispatch();
  const goodsInCart = useSelector(selectGoodsFromCart);

  const [imageLoading, setImageLoading] = useState(true);

  const navigate = useNavigate();

  const onCartOrderButtonClickHandler = (): void => navigate('/order');

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
            <PreloaderCircular />
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
          <CartOrder
            buttonTitle="Proceed to checkout"
            onButtonClick={onCartOrderButtonClickHandler}
          />
        </div>
      )}
    </div>
  );
};
