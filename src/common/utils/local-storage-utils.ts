import { AppRootStateType } from 'app/store';
import { cartReducer } from 'components/cart/cart-reducer';
import { orderReducer } from 'components/order/order-reducer';

export const loadState = (): AppRootStateType | undefined => {
  try {
    const serializedState = localStorage.getItem('state');

    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state: StateArgumentType): void => {
  try {
    localStorage.setItem('state', JSON.stringify(state));
  } catch (err) {
    // ignore write errors
  }
};

// types
type StateArgumentType = {
  cart: ReturnType<typeof cartReducer>;
  order: ReturnType<typeof orderReducer>;
};
