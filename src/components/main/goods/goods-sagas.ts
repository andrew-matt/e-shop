import { call, put, takeEvery } from 'redux-saga/effects';

import { api } from 'api/api';
import { setIsLoading } from 'app/app-reducer';
import { GoodsItemType, setGoods } from 'components/main/goods/goods-reducer';

export function* fetchGoodsWorkerSaga(): Generator<any, void, GoodsItemType[]> {
  yield put(setIsLoading({ isLoading: true }));
  const goods: GoodsItemType[] = yield call(api.getGoods);

  yield put(setGoods({ goods }));
  yield put(setIsLoading({ isLoading: false }));
}

export const fetchGoods = (): { type: string } =>
  ({ type: 'GOODS/FETCH-GOODS' } as const);

export function* goodsWatcherSaga(): Generator {
  yield takeEvery('GOODS/FETCH-GOODS', fetchGoodsWorkerSaga);
}
