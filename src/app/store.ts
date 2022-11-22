import { combineReducers, configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import createSagaMiddleware from 'redux-saga';

import { loadState, saveState } from 'common/utils/local-storage-utils';
import { cartReducer } from 'components/cart/cart-reducer';
import { goodsReducer } from 'components/main/goods/goods-reducer';
import { goodsWatcherSaga } from 'components/main/goods/goods-sagas';

const rootReducer = combineReducers({
  goods: goodsReducer,
  cart: cartReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadState(),
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(sagaMiddleware),
});

store.subscribe(() => {
  saveState({ goods: store.getState().goods, cart: store.getState().cart });
});

sagaMiddleware.run(rootWatcher);

function* rootWatcher(): Generator<any, void, unknown> {
  yield goodsWatcherSaga();
}

// @ts-ignore
window.store = store;

// types
export type AppRootStateType = ReturnType<typeof rootReducer>;
