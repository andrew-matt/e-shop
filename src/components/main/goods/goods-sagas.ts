import { call, put, takeEvery } from 'redux-saga/effects';

import { goodsApi } from 'apis/goods-api';
import { setIsLoading } from 'app/app-reducer';
import { GoodsItemType, setGoods } from 'components/main/goods/goods-reducer';

// sagas
export function* fetchGoodsWorkerSaga(): Generator<any, void, GoodsItemType[]> {
  yield put(setIsLoading({ isLoading: true }));
  const goods: GoodsItemType[] = yield call(goodsApi.getGoods);

  yield put(setGoods({ goods }));
  yield put(setIsLoading({ isLoading: false }));
}

// actions
export const fetchGoods = () => ({ type: 'GOODS/FETCH-GOODS' } as const);

// watcher
export function* goodsWatcherSaga(): Generator {
  yield takeEvery('GOODS/FETCH-GOODS', fetchGoodsWorkerSaga);
}
