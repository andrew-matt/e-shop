import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import { appReducer } from 'app/app-reducer';
import { appWatcherSaga } from 'app/app-sagas';
import { snackBarReducer } from 'common/components/snack_bar/snackBar-reducer';
import { loadState, saveState } from 'common/utils/local-storage-utils';
import { cartReducer } from 'components/cart/cart-reducer';
import { authReducer } from 'components/login/auth/auth-reducer';
import { loginWatcherSaga } from 'components/login/login-sagas';
import { goodsReducer } from 'components/main/goods/goods-reducer';
import { goodsWatcherSaga } from 'components/main/goods/goods-sagas';

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  snackBar: snackBarReducer,
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
  saveState({
    app: store.getState().app,
    auth: store.getState().auth,
    snackBar: store.getState().snackBar,
    goods: store.getState().goods,
    cart: store.getState().cart,
  });
});

sagaMiddleware.run(rootWatcher);

function* rootWatcher(): Generator<any, void> {
  yield all([appWatcherSaga(), goodsWatcherSaga(), loginWatcherSaga()]);
}

// @ts-ignore
window.store = store;

// types
export type AppRootStateType = ReturnType<typeof rootReducer>;
