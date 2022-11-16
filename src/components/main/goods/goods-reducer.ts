const initialState = {
  goodsTotalCount: 0,
  goodsTotalCost: 0,
  goodsTotalCostWithoutDiscount: 0,
};

export const goodsReducer = (
  state: InitialStateType = initialState,
  { type, payload }: GoodsReducerActionTypes = {} as GoodsReducerActionTypes,
): InitialStateType => {
  switch (type) {
    case 'goods/SET-GOODS-TOTAL-COUNT':
    case 'goods/SET-GOODS-TOTAL-COST':
    case 'goods/SET-GOODS-TOTAL-COST-WITHOUT-DISCOUNT':
      return { ...state, ...payload };
    default: {
      return state;
    }
  }
};

// actions
export const setGoodsTotalCount = (goodsTotalCount: number) =>
  ({ type: 'goods/SET-GOODS-TOTAL-COUNT', payload: { goodsTotalCount } } as const);

export const setGoodsTotalCost = (goodsTotalCost: number) =>
  ({ type: 'goods/SET-GOODS-TOTAL-COST', payload: { goodsTotalCost } } as const);

export const setGoodsTotalCostWithoutDiscount = (goodsTotalCostWithoutDiscount: number) =>
  ({
    type: 'goods/SET-GOODS-TOTAL-COST-WITHOUT-DISCOUNT',
    payload: { goodsTotalCostWithoutDiscount },
  } as const);

// types
type InitialStateType = typeof initialState;

type SetGoodsTotalCountType = ReturnType<typeof setGoodsTotalCount>;
type SetGoodsTotalCostType = ReturnType<typeof setGoodsTotalCost>;
type SetGoodsTotalCostWithoutDiscountType = ReturnType<
  typeof setGoodsTotalCostWithoutDiscount
>;

export type GoodsReducerActionTypes =
  | SetGoodsTotalCountType
  | SetGoodsTotalCostType
  | SetGoodsTotalCostWithoutDiscountType;
