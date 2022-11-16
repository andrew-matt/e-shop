import { ChangeEvent, FC, useState } from 'react';

import { useDispatch } from 'react-redux';

import style from './GoodsItem.module.scss';

import { Button } from 'common/components/button/Button';
import { GoodsItemType } from 'common/data/data';
import { priceFormatter } from 'common/utils/utils';
import { changeGoodsItemAmount } from 'components/cart/cart-reducer';

type GoodsItemPropsType = {
  goodsItem: GoodsItemType;
};

export const GoodsItem: FC<GoodsItemPropsType> = ({ goodsItem }) => {
  const { id, image, priceNow, priceLast, brand, description, amount } = goodsItem;

  const dispatch = useDispatch();
  const [goodsItemAmount, setGoodsItemAmount] = useState<number | string>(amount);

  const onGoodsItemCountChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.currentTarget;

    if (Number.isInteger(+value) || value === '') {
      setGoodsItemAmount(event.currentTarget.value);
    }
  };

  const onGoodsItemCountBlurHandler = (): void => {
    const minValue = 1;
    const maxValue = 99;
    let value = goodsItemAmount;

    if (value <= minValue || value === '') {
      value = minValue;
      setGoodsItemAmount(value);
    } else if (value >= maxValue) {
      value = maxValue;
      setGoodsItemAmount(value);
    }

    dispatch(changeGoodsItemAmount(id, value as number));
  };

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
      <div className={style.goodsItemCountWrapper}>
        <Button className={style.goodsItemCountButtonMinus} title="" onClick={() => {}} />
        <input
          type="text"
          maxLength={3}
          value={goodsItemAmount}
          className={style.goodsItemCount}
          onChange={onGoodsItemCountChangeHandler}
          onBlur={onGoodsItemCountBlurHandler}
        />
        <Button className={style.goodsItemCountButtonPlus} title="" onClick={() => {}} />
      </div>
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
