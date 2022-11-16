import { GoodsItemType } from 'common/data/data';

const initialState = [] as GoodsItemType[];

export const cartReducer = (
  state: InitialStateType = initialState,
  { type, payload }: CartReducerActionTypes = {} as CartReducerActionTypes,
): InitialStateType => {
  switch (type) {
    case 'cart/ADD-GOODS-ITEM': {
      const goodsItem = state.find(goodsItem => goodsItem.id === payload.id);

      if (goodsItem) {
        return state.map(goodsItem =>
          goodsItem.id === payload.id
            ? { ...goodsItem, amount: goodsItem.amount + 1 }
            : goodsItem,
        );
      }

      return [{ ...payload }, ...state];
    }
    case 'cart/REMOVE-GOODS-ITEM':
      return state.filter(goodsItem => goodsItem.id !== payload.goodsItemId);
    case 'cart/CHANGE-GOODS-ITEM-AMOUNT':
      return state.map(goodsItem =>
        goodsItem.id === payload.goodsItemId
          ? { ...goodsItem, amount: payload.amount }
          : goodsItem,
      );
    default: {
      return state;
    }
  }
};

// actions
export const addGoodsItem = (goodsItem: GoodsItemType) =>
  ({ type: 'cart/ADD-GOODS-ITEM', payload: goodsItem } as const);

export const removeGoodsItem = (goodsItemId: number) =>
  ({ type: 'cart/REMOVE-GOODS-ITEM', payload: { goodsItemId } } as const);

export const changeGoodsItemAmount = (goodsItemId: number, amount: number) =>
  ({ type: 'cart/CHANGE-GOODS-ITEM-AMOUNT', payload: { goodsItemId, amount } } as const);

// types
type InitialStateType = typeof initialState;

type AddGoodsItemType = ReturnType<typeof addGoodsItem>;
type RemoveGoodsItemType = ReturnType<typeof removeGoodsItem>;
type ChangeGoodsItemAmountType = ReturnType<typeof changeGoodsItemAmount>;

export type CartReducerActionTypes =
  | AddGoodsItemType
  | RemoveGoodsItemType
  | ChangeGoodsItemAmountType;
