import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { priceCountHandler } from 'common/utils/utils';
import { GoodsItemType } from 'components/main/goods/goods-reducer';

export const slice = createSlice({
  name: 'cart',
  initialState: {
    goodsInCart: [] as GoodsItemType[],
    goodsAmount: 0,
    goodsCost: 0,
    goodsCostWithoutDiscount: 0,
    discount: 0,
  },
  reducers: {
    addGoodsItem(state, action: PayloadAction<{ goodsItem: GoodsItemType }>) {
      const goodsItem = state.goodsInCart.find(
        goodsItem => goodsItem.id === action.payload.goodsItem.id,
      );

      if (goodsItem) {
        goodsItem.amount += 1;
      } else {
        state.goodsInCart.unshift(action.payload.goodsItem);
      }
    },
    removeGoodsItem(state, action: PayloadAction<{ goodsItemId: string }>) {
      const index = state.goodsInCart.findIndex(
        goodsItem => goodsItem.id === action.payload.goodsItemId,
      );

      if (index > -1) {
        state.goodsInCart.splice(index, 1);
      }
    },
    changeGoodsItemAmount(
      state,
      action: PayloadAction<{ goodsItemId: string; amount: number }>,
    ) {
      const goodsItem = state.goodsInCart.find(
        goodsItem => goodsItem.id === action.payload.goodsItemId,
      );

      if (goodsItem) {
        goodsItem.amount = action.payload.amount;
      }
    },
    updateCart(state) {
      state.goodsAmount = state.goodsInCart.reduce((acc, cur) => acc + cur.amount, 0);
      state.goodsCost = priceCountHandler(
        state.goodsInCart.reduce((acc, cur) => acc + cur.price * cur.amount, 0),
      );
      state.goodsCostWithoutDiscount = priceCountHandler(
        state.goodsInCart.reduce((acc, cur) => acc + cur.price * cur.amount, 0),
      );
      state.discount = priceCountHandler(
        priceCountHandler(
          state.goodsInCart.reduce((acc, cur) => acc + cur.price * cur.amount, 0),
        ) -
          priceCountHandler(
            state.goodsInCart.reduce((acc, cur) => acc + cur.price * cur.amount, 0),
          ),
      );
    },
    emptyCart(state) {
      state.goodsInCart = [];
      state.goodsAmount = 0;
      state.goodsCost = 0;
      state.goodsCostWithoutDiscount = 0;
      state.discount = 0;
    },
  },
});

export const cartReducer = slice.reducer;

export const {
  addGoodsItem,
  removeGoodsItem,
  changeGoodsItemAmount,
  updateCart,
  emptyCart,
} = slice.actions;
