import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { goodsReducer } from 'components/main/goods/goods-reducer';

const rootReducer = combineReducers({
  goods: goodsReducer,
});

export const store = configureStore({ reducer: rootReducer });

// @ts-ignore
window.store = store;

// types
export type AppRootStateType = ReturnType<typeof rootReducer>;
