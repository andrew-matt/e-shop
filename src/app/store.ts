import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import { appReducer } from 'app/app-reducer';
import { appWatcherSaga } from 'app/app-sagas';
import { snackBarReducer } from 'common/components/snack_bar/snackBar-reducer';
import { loadState, saveState } from 'common/utils/local-storage-utils';
import { authReducer } from 'components/auth/auth-reducer';
import { authWatcherSaga } from 'components/auth/auth-sagas';
import { cartReducer } from 'components/cart/cart-reducer';
import { goodsReducer } from 'components/main/goods/goods-reducer';
import { goodsWatcherSaga } from 'components/main/goods/goods-sagas';
import { orderReducer } from 'components/order/order-reducer';
import { orderWatcherSaga } from 'components/order/order-sagas';

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  snackBar: snackBarReducer,
  goods: goodsReducer,
  cart: cartReducer,
  order: orderReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadState(),
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(sagaMiddleware),
});

store.subscribe(() => {
  saveState({
    cart: store.getState().cart,
    order: store.getState().order,
  });
});

sagaMiddleware.run(rootWatcher);

function* rootWatcher(): Generator<any, void> {
  yield all([
    appWatcherSaga(),
    authWatcherSaga(),
    goodsWatcherSaga(),
    orderWatcherSaga(),
  ]);
}

// @ts-ignore
window.store = store;

// types
export type AppRootStateType = ReturnType<typeof rootReducer>;
