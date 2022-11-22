import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'goods',
  initialState: {
    goodsInStore: [] as GoodsItemType[],
  },
  reducers: {
    setGoods(state, action: PayloadAction<{ goods: GoodsItemType[] }>) {
      state.goodsInStore = action.payload.goods;
    },
  },
});

export const goodsReducer = slice.reducer;

export const { setGoods } = slice.actions;

// types
export type GoodsItemType = {
  id: number;
  image: string;
  priceNow: number;
  priceLast: number;
  brand: string;
  description: string;
  amount: number;
};
