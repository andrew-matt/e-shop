import { FC } from 'react';

import style from 'components/main/goods/goods_card/GoodsCard.module.scss';

type GoodsCardPropsType = {
  image: string;
  altText: string;
  priceNow: string;
  priceLast: string;
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
  return (
    <div className={style.goodsCard}>
      <div className={style.imageWrapper}>
        <img src={image} alt={altText} className={style.image} />
      </div>
      <p className={style.goodsCardPrice}>
        <ins className={style.priceNow}>{priceNow}</ins>
        <del className={style.priceLast}>{priceLast}</del>
      </p>
      <p className={style.goodsCardDescription}>
        <span className={style.goodsCardBrand}>{brand}</span>
        <span>{description}</span>
      </p>
    </div>
  );
};
