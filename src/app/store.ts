import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { cartReducer } from 'components/cart/cart-reducer';

const rootReducer = combineReducers({
  cart: cartReducer,
});

export const store = configureStore({ reducer: rootReducer });

// @ts-ignore
window.store = store;

// types
export type AppRootStateType = ReturnType<typeof rootReducer>;
