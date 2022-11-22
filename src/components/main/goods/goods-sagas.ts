import { call, put, takeEvery } from 'redux-saga/effects';

import { api } from 'api/api';
import { GoodsItemType, setGoods } from 'components/main/goods/goods-reducer';

export function* fetchGoodsWorkerSaga(): Generator<any, void, GoodsItemType[]> {
  const goods: GoodsItemType[] = yield call(api.getGoods);

  yield put(setGoods({ goods }));
}

export const fetchGoods = (): { type: string } =>
  ({ type: 'GOODS/FETCH-GOODS' } as const);

export function* goodsWatcherSaga(): Generator {
  yield takeEvery('GOODS/FETCH-GOODS', fetchGoodsWorkerSaga);
}
