import { FC, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import style from './Goods.module.scss';

import { fetchGoods } from 'components/main/goods/goods-sagas';
import { selectGoodsFromStore } from 'components/main/goods/goods-selectors';
import { GoodsCard } from 'components/main/goods/goods_card/GoodsCard';

export const Goods: FC = () => {
  const dispatch = useDispatch();
  const goodsInStore = useSelector(selectGoodsFromStore);

  useEffect(() => {
    dispatch(fetchGoods());
  }, [dispatch]);

  return (
    <>
      <h2 className={style.goodsHeader}>Хиты продаж</h2>
      <div className={style.goodsWrapper}>
        {goodsInStore.length !== 0 &&
          goodsInStore.map((goodsItem: any) => {
            return <GoodsCard key={goodsItem.id} goodsItem={goodsItem} />;
          })}
      </div>
    </>
  );
};
