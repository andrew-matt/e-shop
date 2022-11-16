import { FC } from 'react';

import { useSelector } from 'react-redux';

import style from './CartOrder.module.scss';

import { Button } from 'common/components/button/Button';
import { priceCountHandler, priceFormatter } from 'common/utils/utils';
import {
  selectGoodsTotalCost,
  selectGoodsTotalCostWithoutDiscount,
  selectGoodsTotalCount,
} from 'components/cart/cart_order/cart-order-selectors';

export const CartOrder: FC = () => {
  const goodsTotalCost = useSelector(selectGoodsTotalCost);
  const goodsTotalCount = useSelector(selectGoodsTotalCount);
  const goodsTotalCostWithoutDiscount = useSelector(selectGoodsTotalCostWithoutDiscount);

  const discount = priceFormatter(
    priceCountHandler(goodsTotalCostWithoutDiscount - goodsTotalCost),
  );

  return (
    <div className={style.cartFormSidebar}>
      <div className={style.sidebarStickyWrap}>
        <div className={style.cartOrder}>
          <div className={style.cartOrderTop}>
            <p className={style.totalLine}>
              <span>Итого</span>
              <span>{priceFormatter(goodsTotalCost)} р.</span>
            </p>
            <div className={style.countLine}>
              <span>Товары, {goodsTotalCount} шт.</span>
              <span>{priceFormatter(goodsTotalCostWithoutDiscount)} р.</span>
            </div>
            <div className={style.discountLine}>
              <span>Скидка</span>
              <span>&ndash; {discount} р.</span>
            </div>
          </div>
          <Button className={style.cartOrderButton} title="Заказать" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};
