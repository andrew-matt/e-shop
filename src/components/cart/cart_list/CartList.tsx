import { FC } from 'react';

import style from './CartList.module.scss';

import { useAppSelector } from 'common/hooks/hooks';
import { GoodsItem } from 'components/cart/cart_list/goods_item/GoodsItem';

export const CartList: FC = () => {
  const goodsInCart = useAppSelector(state => state.cart.goodsInCart);
  const goodsAmount = useAppSelector(state => state.cart.goodsAmount);

  return (
    <div className={style.cartListContent}>
      <div className={style.cartList}>
        <div className={style.cartListHeaderWrapper}>
          <h1 className={style.cartListHeader} data-count={goodsAmount}>
            Cart
          </h1>
        </div>
        {goodsInCart.map(goodsItem => {
          return <GoodsItem key={goodsItem.id} goodsItem={goodsItem} />;
        })}
      </div>
    </div>
  );
};
