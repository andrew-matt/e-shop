import { FC } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Button } from 'common/components/button/Button';
import { GoodsItemType } from 'common/data/data';
import { priceCountHandler, priceFormatter } from 'common/utils/utils';
import { addGoodsItem } from 'components/cart/cart-reducer';
import {
  setGoodsTotalCost,
  setGoodsTotalCostWithoutDiscount,
  setGoodsTotalCount,
} from 'components/main/goods/goods-reducer';
import {
  selectGoodsTotalCost,
  selectGoodsTotalCostWithoutDiscount,
  selectGoodsTotalCount,
} from 'components/main/goods/goods_card/goods-card-selectors';
import style from 'components/main/goods/goods_card/GoodsCard.module.scss';

type GoodsCardPropsType = {
  goodsItem: GoodsItemType;
};

export const GoodsCard: FC<GoodsCardPropsType> = ({ goodsItem }) => {
  const dispatch = useDispatch();
  const goodsTotalCount = useSelector(selectGoodsTotalCount);
  const goodsTotalCost = useSelector(selectGoodsTotalCost);
  const goodsTotalCostWithoutDiscount = useSelector(selectGoodsTotalCostWithoutDiscount);

  const { image, priceNow, priceLast, brand, description } = goodsItem;

  const onAddToCartButtonClickHandler = (): void => {
    dispatch(addGoodsItem(goodsItem));
    dispatch(setGoodsTotalCount(goodsTotalCount + 1));
    dispatch(setGoodsTotalCost(priceCountHandler(goodsTotalCost + priceNow)));
    dispatch(
      setGoodsTotalCostWithoutDiscount(
        priceCountHandler(goodsTotalCostWithoutDiscount + priceLast),
      ),
    );
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
