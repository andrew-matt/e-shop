import { FC } from 'react';

import style from './Goods.module.scss';

import { goodsData } from 'common/data/data';
import { GoodsCard } from 'components/main/goods/goods_card/GoodsCard';

export const Goods: FC = () => {
  return (
    <>
      <h2 className={style.goodsHeader}>Хиты продаж</h2>
      <div className={style.goodsWrapper}>
        {goodsData.map(goodsItem => {
          return (
            <GoodsCard
              key={goodsItem.id}
              image={goodsItem.image}
              altText={goodsItem.description}
              priceNow={goodsItem.priceNow}
              priceLast={goodsItem.priceLast}
              brand={goodsItem.brand}
              description={goodsItem.description}
            />
          );
        })}
      </div>
    </>
  );
};
