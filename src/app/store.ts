import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { loadState, saveState } from 'common/utils/local-storage-utils';
import { cartReducer } from 'components/cart/cart-reducer';

const rootReducer = combineReducers({
  cart: cartReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadState(),
});

store.subscribe(() => {
  saveState({ cart: store.getState().cart });
});

// @ts-ignore
window.store = store;

// types
export type AppRootStateType = ReturnType<typeof rootReducer>;
