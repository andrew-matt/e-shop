import { FC } from 'react';

import style from './GoodsItem.module.scss';

import { GoodsItemType } from 'common/data/data';
import { priceFormatter } from 'common/utils/utils';
import { GoodsCountControl } from 'components/cart/cart_list/goods_item/goods_count_control/GoodsCountControl';

type GoodsItemPropsType = {
  goodsItem: GoodsItemType;
};

export const GoodsItem: FC<GoodsItemPropsType> = ({ goodsItem }) => {
  const { id, image, priceNow, priceLast, brand, description, amount } = goodsItem;

  return (
    <div className={style.cartListItemWrapper}>
      <div className={style.goodsItemWrapper}>
        <div className={style.goodsItemImageWrapper}>
          <img src={image} alt={description} className={style.goodsItemImage} />
        </div>
        <div className={style.goodsItemInfo}>
          <span className={style.goodsItemName}>{description}</span>
          <span className={style.goodsItemBrand}>, {brand}</span>
        </div>
      </div>
      <GoodsCountControl goodsItemId={id} amount={amount} />
      <div className={style.goodsItemPrice}>
        <div className={style.goodsItemPriceNew}>
          {priceFormatter(priceNow * amount)} р.
        </div>
        <div className={style.goodsItemPriceOld}>
          {priceFormatter(priceLast * amount)} р.
        </div>
      </div>
    </div>
  );
};
