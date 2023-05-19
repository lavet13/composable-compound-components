import { createContext, useReducer } from 'react';
import { createAction } from '../utils/reducer/reducer.utils';

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  cartItems: [],
  addProductToCart: () => {},
});

const CART_ACTION_TYPES = {
  SET_CART_ITEMS: 'cart/SET_CART_ITEMS',
};

const CART_INITIAL_STATE = {
  cartItems: [],
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return { ...state, cartItems: payload };

    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [{ cartItems }, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);

  const addProductToCart = productToAdd => {
    dispatch(
      createAction(
        CART_ACTION_TYPES.SET_CART_ITEMS,
        addCartItem(cartItems, productToAdd)
      )
    );
  };

  const value = { cartItems, addProductToCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
