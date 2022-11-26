import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { appReducer } from 'app/app-reducer';
import { loadState, saveState } from 'common/utils/local-storage-utils';
import { cartReducer } from 'components/cart/cart-reducer';
import { goodsReducer } from 'components/main/goods/goods-reducer';
import { goodsWatcherSaga } from 'components/main/goods/goods-sagas';

const rootReducer = combineReducers({
  app: appReducer,
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
    goods: store.getState().goods,
    cart: store.getState().cart,
  });
});

sagaMiddleware.run(rootWatcher);

function* rootWatcher(): Generator<any, void, unknown> {
  yield goodsWatcherSaga();
}

// @ts-ignore
window.store = store;

// types
export type AppRootStateType = ReturnType<typeof rootReducer>;
