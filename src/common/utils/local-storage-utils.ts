import { AppRootStateType } from 'app/store';

export const loadState = (): AppRootStateType | undefined => {
  try {
    const serializedStateCart = localStorage.getItem('cart');

    if (serializedStateCart === null) {
      return undefined;
    }

    return JSON.parse(serializedStateCart);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state: AppRootStateType): void => {
  try {
    localStorage.setItem('cart', JSON.stringify({ cart: state.cart }));
  } catch (err) {
    // ignore write errors
  }
};
