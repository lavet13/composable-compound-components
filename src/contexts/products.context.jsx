import { createContext, useReducer } from 'react';
import { createAction } from '../utils/reducer/reducer.utils';

import PRODUCTS from '../shop-data';

export const ProductsContext = createContext({
  products: [],
  setRating: () => {},
});

const PRODUCTS_INITIAL_STATE = {
  products: PRODUCTS,
};

const PRODUCTS_ACTION_TYPES = {
  SET_PRODUCTS: 'products/SET_PRODUCTS',
};

const productReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCTS_ACTION_TYPES.SET_PRODUCTS:
      return { ...state, products: payload };

    default:
      throw new Error(`Unhandled type ${type} in productReducer`);
  }
};

export const ProductsProvider = ({ children }) => {
  const [{ products }, dispatch] = useReducer(
    productReducer,
    PRODUCTS_INITIAL_STATE
  );

  const setRating = productWithNewRating => {
    const newProducts = products.map(product =>
      product.id === productWithNewRating.id ? productWithNewRating : product
    );

    dispatch(createAction(PRODUCTS_ACTION_TYPES.SET_PRODUCTS, newProducts));
  };

  const value = { products, setRating };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
