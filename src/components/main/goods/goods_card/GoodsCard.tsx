import { FC, useState } from 'react';

import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';

import { showSnackBar } from 'common/components/mui/snack_bar/snackBar-reducer';
import { PreloaderCircular } from 'common/components/preloaders/preloader_circular/PreloaderCircular';
import { useAppSelector } from 'common/hooks/hooks';
import { changePriceFormat } from 'common/utils/utils';
import { addGoodsItem, updateCart } from 'components/cart/cart-reducer';
import { GoodsItemType } from 'components/main/goods/goods-reducer';
import style from 'components/main/goods/goods_card/GoodsCard.module.scss';
import { setOrderIsComplete } from 'components/order/order-reducer';

type GoodsCard1PropsType = {
  goodsItem: GoodsItemType;
};

export const GoodsCard: FC<GoodsCard1PropsType> = ({ goodsItem }) => {
  const { description, image, price } = goodsItem;

  const dispatch = useDispatch();

  const goodsInCart = useAppSelector(state => state.cart.goodsInCart);

  const [imageLoading, setImageLoading] = useState(true);

  const onImageLoadHandler = (): void => setImageLoading(false);

  const onAddToCartButtonClickHandler = (): void => {
    dispatch(addGoodsItem({ goodsItem }));
    dispatch(updateCart());
    dispatch(
      showSnackBar({
        title: `Product added to the cart`,
        transition: 'slide',
        anchorOrigin: { vertical: 'top', horizontal: 'center' },
        classNames: { snackBar: style.snackBar, alert: style.alert },
      }),
    );

    if (goodsInCart.length === 0) {
      dispatch(setOrderIsComplete({ orderIsComplete: false }));
    }
  };

  return (
    <div className={style.goodsCardWrapper}>
      <div className={style.goodsCard}>
        <div className={style.imageWrapper}>
          <img
            src={image}
            alt={description}
            className={style.image}
            onLoad={onImageLoadHandler}
          />
          {imageLoading && <PreloaderCircular className={style.preloaderCircular} />}
        </div>
        <div className={style.content}>
          <div className={style.description}>{description}</div>
          <div className={style.wrapper}>
            <div className={style.price}>${changePriceFormat(price)}</div>
            <Button
              variant="contained"
              onClick={onAddToCartButtonClickHandler}
              className={style.button}
              color="success"
            >
              <div className={style.buttonTitle}>Add to cart</div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
