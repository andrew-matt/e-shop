import { ChangeEvent, FC, useState } from 'react';

import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { useDispatch } from 'react-redux';

import style from './GoodsCountControl.module.scss';

import { Button } from 'common/components/button/Button';
import { changeGoodsItemAmount, removeGoodsItem } from 'components/cart/cart-reducer';

type GoodsCountControlPropsType = {
  goodsItemId: string;
  amount: number;
};

export const GoodsCountControl: FC<GoodsCountControlPropsType> = ({
  goodsItemId,
  amount,
}) => {
  const dispatch = useDispatch();

  const [goodsItemAmount, setGoodsItemAmount] = useState<number | string>(amount);

  const minValue = 1;
  const maxValue = 99;

  const goodsItemCountButtonPlusDisabled = goodsItemAmount === maxValue;

  const onGoodsItemCountChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.currentTarget;

    if (Number.isInteger(+value) || value === '') {
      setGoodsItemAmount(event.currentTarget.value);
    }
  };

  const onGoodsItemCountBlurHandler = (changedValue?: number): void => {
    let value = goodsItemAmount;

    if (changedValue) {
      value = changedValue;
    }

    if (value <= minValue || value === '') {
      value = minValue;
      setGoodsItemAmount(value);
    } else if (value >= maxValue) {
      value = maxValue;
      setGoodsItemAmount(value);
    }

    dispatch(changeGoodsItemAmount({ goodsItemId, amount: value as number }));
  };

  const onGoodsItemCountButtonMinusClickHandler = (): void => {
    const valueAfterChange = +goodsItemAmount - 1;

    if (valueAfterChange < 1) {
      dispatch(removeGoodsItem({ goodsItemId }));
    }
    setGoodsItemAmount(valueAfterChange);
    dispatch(changeGoodsItemAmount({ goodsItemId, amount: valueAfterChange }));
  };

  const onGoodsItemCountButtonPlusClickHandler = (): void => {
    const valueAfterChange = +goodsItemAmount + 1;

    setGoodsItemAmount(valueAfterChange);
    dispatch(changeGoodsItemAmount({ goodsItemId, amount: valueAfterChange }));
  };

  const onGoodsItemRemoveButtonClickHandler = (): void => {
    dispatch(removeGoodsItem({ goodsItemId }));
  };

  return (
    <div className={style.goodsItemCountWrapper}>
      <Button
        className={style.goodsItemCountButtonMinus}
        title=""
        onClick={onGoodsItemCountButtonMinusClickHandler}
      />
      <input
        type="text"
        maxLength={3}
        value={goodsItemAmount}
        className={style.goodsItemCount}
        onChange={onGoodsItemCountChangeHandler}
        onBlur={() => onGoodsItemCountBlurHandler()}
      />
      <Button
        className={style.goodsItemCountButtonPlus}
        title=""
        onClick={onGoodsItemCountButtonPlusClickHandler}
        disabled={goodsItemCountButtonPlusDisabled}
      />
      <IconButton
        className={style.goodsItemRemoveButton}
        onClick={onGoodsItemRemoveButtonClickHandler}
      >
        <DeleteIcon />
      </IconButton>
    </div>
  );
};
