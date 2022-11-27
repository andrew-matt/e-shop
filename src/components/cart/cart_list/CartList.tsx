import { FC } from 'react';

import { useSelector } from 'react-redux';

import style from './CartList.module.scss';

import {
  selectGoodsFromCart,
  selectGoodsTotalCount,
} from 'components/cart/cart_list/cart-list-selectors';
import { GoodsItem } from 'components/cart/cart_list/goods_item/GoodsItem';

export const CartList: FC = () => {
  const goodsInCart = useSelector(selectGoodsFromCart);
  const goodsTotalCount = useSelector(selectGoodsTotalCount);

  return (
    <div className={style.cartListContent}>
      <div className={style.cartList}>
        <div className={style.cartListHeaderWrapper}>
          <h1 className={style.cartListHeader} data-count={goodsTotalCount}>
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
