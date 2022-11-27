import { FC } from 'react';

import { useSelector } from 'react-redux';

import style from './CartOrder.module.scss';

import { Button } from 'common/components/button/Button';
import { priceFormatter } from 'common/utils/utils';
import {
  selectDiscount,
  selectGoodsTotalCost,
  selectGoodsTotalCostWithoutDiscount,
  selectGoodsTotalCount,
} from 'components/cart/cart_order/cart-order-selectors';

type CartOrderPropsType = {
  buttonTitle: string;
  onButtonClick?: () => void;
  form?: string;
};

export const CartOrder: FC<CartOrderPropsType> = ({
  buttonTitle,
  onButtonClick,
  form,
}) => {
  const goodsTotalCost = useSelector(selectGoodsTotalCost);
  const goodsTotalCount = useSelector(selectGoodsTotalCount);
  const goodsTotalCostWithoutDiscount = useSelector(selectGoodsTotalCostWithoutDiscount);
  const discount = useSelector(selectDiscount);

  return (
    <div className={style.cartFormSidebar}>
      <div className={style.sidebarStickyWrap}>
        <div className={style.cartOrder}>
          <div className={style.cartOrderTop}>
            <p className={style.totalLine}>
              <span>Order total</span>
              <span>{priceFormatter(goodsTotalCost)} р.</span>
            </p>
            <div className={style.countLine}>
              <span>Goods, {goodsTotalCount} items</span>
              <span>{priceFormatter(goodsTotalCostWithoutDiscount)} р.</span>
            </div>
            <div className={style.discountLine}>
              <span>Discount</span>
              <span>&ndash; {priceFormatter(discount)} р.</span>
            </div>
          </div>
          <Button
            className={style.cartOrderButton}
            title={buttonTitle}
            onClick={onButtonClick}
            form={form}
            submit
          />
        </div>
      </div>
    </div>
  );
};
