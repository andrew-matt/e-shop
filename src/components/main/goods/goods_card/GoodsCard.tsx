import { FC } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Button } from 'common/components/button/Button';
import { fractionDigits, priceFormatter } from 'common/utils/utils';
import { selectGoodsTotalCost } from 'components/header/header-selectors';
import {
  setGoodsTotalCost,
  setGoodsTotalCount,
} from 'components/main/goods/goods-reducer';
import { selectGoodsTotalCount } from 'components/main/goods/goods_card/goods-card-selectors';
import style from 'components/main/goods/goods_card/GoodsCard.module.scss';

type GoodsCardPropsType = {
  image: string;
  altText: string;
  priceNow: number;
  priceLast: number;
  brand: string;
  description: string;
};

export const GoodsCard: FC<GoodsCardPropsType> = ({
  image,
  altText,
  priceNow,
  priceLast,
  brand,
  description,
}) => {
  const dispatch = useDispatch();
  const goodsTotalCount = useSelector(selectGoodsTotalCount);
  const goodsTotalCost = useSelector(selectGoodsTotalCost);

  const onAddToCartButtonClickHandler = (): void => {
    dispatch(setGoodsTotalCount(goodsTotalCount + 1));
    dispatch(setGoodsTotalCost(+(goodsTotalCost + priceNow).toFixed(fractionDigits)));
  };

  return (
    <div className={style.goodsCard}>
      <div className={style.imageWrapper}>
        <img src={image} alt={altText} className={style.image} />
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
