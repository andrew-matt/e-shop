import { FC, useState } from 'react';

import { useDispatch } from 'react-redux';

import style from './GoodsCard.module.scss';

import { Button } from 'common/components/button/Button';
import { Preloader } from 'common/components/preloader/Preloader';
import { priceFormatter } from 'common/utils/utils';
import { addGoodsItem, updateCart } from 'components/cart/cart-reducer';
import { GoodsItemType } from 'components/main/goods/goods-reducer';

type GoodsCardPropsType = {
  goodsItem: GoodsItemType;
};

export const GoodsCard: FC<GoodsCardPropsType> = ({ goodsItem }) => {
  const { image, priceNow, priceLast, brand, description } = goodsItem;

  const dispatch = useDispatch();

  const [imageLoading, setImageLoading] = useState(true);

  const onAddToCartButtonClickHandler = (): void => {
    dispatch(addGoodsItem({ goodsItem }));
    dispatch(updateCart());
  };

  const onImageLoadHandler = (): void => setImageLoading(false);

  return (
    <div className={style.goodsCard}>
      <div className={style.imageWrapper}>
        <img
          src={image}
          alt={description}
          className={`${style.image} ${imageLoading && style.imageLoading}`}
          onLoad={onImageLoadHandler}
        />
        {imageLoading && <Preloader className={style.preloader} />}
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
