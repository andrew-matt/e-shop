import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { GoodsItemType } from 'common/data/data';
import { priceCountHandler } from 'common/utils/utils';

export const slice = createSlice({
  name: 'cart',
  initialState: {
    goodsInCart: [] as GoodsItemType[],
    goodsTotalCount: 0,
    goodsTotalCost: 0,
    goodsTotalCostWithoutDiscount: 0,
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
    removeGoodsItem(state, action: PayloadAction<{ goodsItemId: number }>) {
      const index = state.goodsInCart.findIndex(
        goodsItem => goodsItem.id === action.payload.goodsItemId,
      );

      if (index > -1) {
        state.goodsInCart.splice(index, 1);
      }
    },
    changeGoodsItemAmount(
      state,
      action: PayloadAction<{ goodsItemId: number; amount: number }>,
    ) {
      const goodsItem = state.goodsInCart.find(
        goodsItem => goodsItem.id === action.payload.goodsItemId,
      );

      if (goodsItem) {
        goodsItem.amount = action.payload.amount;
      }
    },
    updateCart(state) {
      state.goodsTotalCount = state.goodsInCart.reduce((acc, cur) => acc + cur.amount, 0);
      state.goodsTotalCost = priceCountHandler(
        state.goodsInCart.reduce((acc, cur) => acc + cur.priceNow * cur.amount, 0),
      );
      state.goodsTotalCostWithoutDiscount = priceCountHandler(
        state.goodsInCart.reduce((acc, cur) => acc + cur.priceLast * cur.amount, 0),
      );
      state.discount = priceCountHandler(
        priceCountHandler(
          state.goodsInCart.reduce((acc, cur) => acc + cur.priceLast * cur.amount, 0),
        ) -
          priceCountHandler(
            state.goodsInCart.reduce((acc, cur) => acc + cur.priceNow * cur.amount, 0),
          ),
      );
    },
  },
});

export const cartReducer = slice.reducer;

export const { addGoodsItem, removeGoodsItem, changeGoodsItemAmount, updateCart } =
  slice.actions;
