import { FC, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import style from './GoodsCard.module.scss';

import { Button } from 'common/components/button/Button';
import { PreloaderCircular } from 'common/components/preloaders/preloader_circular/PreloaderCircular';
import { priceFormatter } from 'common/utils/utils';
import { addGoodsItem, updateCart } from 'components/cart/cart-reducer';
import { GoodsItemType } from 'components/main/goods/goods-reducer';
import { selectGoodsInCart } from 'components/main/goods/goods_card/goods-card-selectors';
import { setOrderIsComplete } from 'components/order/order-reducer';

type GoodsCardPropsType = {
  goodsItem: GoodsItemType;
};

export const GoodsCard: FC<GoodsCardPropsType> = ({ goodsItem }) => {
  const { image, priceNow, priceLast, brand, description } = goodsItem;

  const dispatch = useDispatch();

  const goodsInCart = useSelector(selectGoodsInCart);

  const [imageLoading, setImageLoading] = useState(true);

  const onAddToCartButtonClickHandler = (): void => {
    dispatch(addGoodsItem({ goodsItem }));
    dispatch(updateCart());

    if (goodsInCart.length === 0) {
      dispatch(setOrderIsComplete({ orderIsComplete: false }));
    }
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
        {imageLoading && <PreloaderCircular className={style.preloaderCircular} />}
        <Button
          className={style.addToCartButton}
          title="Add to cart"
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
