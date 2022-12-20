import { FC, useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { PreloaderCircular } from 'common/components/preloaders/preloader_circular/PreloaderCircular';
import { useAppSelector } from 'common/hooks/hooks';
import { GoodsItemType } from 'components/main/goods/goods-reducer';
import { fetchGoods } from 'components/main/goods/goods-sagas';
import style from 'components/main/goods/Goods.module.scss';
import { GoodsCard } from 'components/main/goods/goods_card/GoodsCard';

export const Goods: FC = () => {
  const dispatch = useDispatch();

  const isLoading = useAppSelector(state => state.app.isLoading);
  const goodsInStore = useAppSelector(state => state.goods.goodsInStore);

  useEffect(() => {
    dispatch(fetchGoods());
  }, [dispatch]);

  if (isLoading) {
    return <PreloaderCircular />;
  }

  return (
    <div className={style.goods}>
      {goodsInStore.length !== 0 &&
        goodsInStore.map((goodsItem: GoodsItemType) => {
          return <GoodsCard key={goodsItem.id} goodsItem={goodsItem} />;
        })}
    </div>
  );
};
