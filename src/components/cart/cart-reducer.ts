import { GoodsItemType } from 'common/data/data';
import { priceCountHandler } from 'common/utils/utils';

const initialState = {
  goodsInCart: [] as GoodsItemType[],
  goodsTotalCount: 0,
  goodsTotalCost: 0,
  goodsTotalCostWithoutDiscount: 0,
  discount: 0,
};

export const cartReducer = (
  state: InitialStateType = initialState,
  { type, payload }: CartReducerActionTypes = {} as CartReducerActionTypes,
): InitialStateType => {
  switch (type) {
    case 'cart/ADD-GOODS-ITEM': {
      const goodsItem = state.goodsInCart.find(goodsItem => goodsItem.id === payload.id);

      if (goodsItem) {
        return {
          ...state,
          goodsInCart: state.goodsInCart.map(goodsItem =>
            goodsItem.id === payload.id
              ? { ...goodsItem, amount: goodsItem.amount + 1 }
              : goodsItem,
          ),
        };
      }

      return { ...state, goodsInCart: [payload, ...state.goodsInCart] };
    }
    case 'cart/REMOVE-GOODS-ITEM':
      return {
        ...state,
        goodsInCart: state.goodsInCart.filter(
          goodsItem => goodsItem.id !== payload.goodsItemId,
        ),
      };
    case 'cart/CHANGE-GOODS-ITEM-AMOUNT':
      return {
        ...state,
        goodsInCart: state.goodsInCart.map(goodsItem =>
          goodsItem.id === payload.goodsItemId
            ? { ...goodsItem, amount: payload.amount }
            : goodsItem,
        ),
      };
    case 'cart/UPDATE-CART':
      return {
        ...state,
        goodsTotalCount: state.goodsInCart.reduce((acc, cur) => acc + cur.amount, 0),
        goodsTotalCost: priceCountHandler(
          state.goodsInCart.reduce((acc, cur) => acc + cur.priceNow * cur.amount, 0),
        ),
        goodsTotalCostWithoutDiscount: priceCountHandler(
          state.goodsInCart.reduce((acc, cur) => acc + cur.priceLast * cur.amount, 0),
        ),
        discount: priceCountHandler(
          priceCountHandler(
            state.goodsInCart.reduce((acc, cur) => acc + cur.priceLast * cur.amount, 0),
          ) -
            priceCountHandler(
              state.goodsInCart.reduce((acc, cur) => acc + cur.priceNow * cur.amount, 0),
            ),
        ),
      };
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

export const updateCart = () => ({ type: 'cart/UPDATE-CART', payload: {} } as const);

// types
type InitialStateType = typeof initialState;

type AddGoodsItemType = ReturnType<typeof addGoodsItem>;
type RemoveGoodsItemType = ReturnType<typeof removeGoodsItem>;
type ChangeGoodsItemAmountType = ReturnType<typeof changeGoodsItemAmount>;
type UpdateCartType = ReturnType<typeof updateCart>;

export type CartReducerActionTypes =
  | AddGoodsItemType
  | RemoveGoodsItemType
  | ChangeGoodsItemAmountType
  | UpdateCartType;
