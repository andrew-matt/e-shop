import { FC } from 'react';

import { useDispatch } from 'react-redux';

import style from './GoodsCard.module.scss';

import { Button } from 'common/components/button/Button';
import { GoodsItemType } from 'common/data/data';
import { priceFormatter } from 'common/utils/utils';
import { addGoodsItem, updateCart } from 'components/cart/cart-reducer';

type GoodsCardPropsType = {
  goodsItem: GoodsItemType;
};

export const GoodsCard: FC<GoodsCardPropsType> = ({ goodsItem }) => {
  const { image, priceNow, priceLast, brand, description } = goodsItem;

  const dispatch = useDispatch();

  const onAddToCartButtonClickHandler = (): void => {
    dispatch(addGoodsItem(goodsItem));
    dispatch(updateCart());
  };

  return (
    <div className={style.goodsCard}>
      <div className={style.imageWrapper}>
        <img src={image} alt={description} className={style.image} />
        <Button
          className={style.addToCartButton}
          title="Добавить в корзину"
          onClick={onAddToCartButtonClickHandler}
        />
      </div>
      <p className={style.goodsCardPrice}>
        <ins className={style.priceNow}>{priceFormatter(priceNow)} р.</ins>
        <del className={style.priceLast}>{priceFormatter(priceLast)} р.</del>
      </p>
      <p className={style.goodsCardDescription}>
        <span className={style.goodsCardBrand}>{brand}</span>
        <span>{description}</span>
      </p>
    </div>
  );
};
