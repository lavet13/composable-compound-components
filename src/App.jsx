import { useContext } from 'react';

import { ProductsContext } from './contexts/products.context';
import { CartContext } from './contexts/cart.context';

import ProductCard from './components/product-card/product-card.component';

import { ProductsContainer } from './App.styles';

import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  const { products } = useContext(ProductsContext);
  const { cartItems, addProductToCart } = useContext(CartContext);
  console.log(cartItems);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <ProductsContainer>
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            image={<ProductCard.Image />}
            info={
              <ProductCard.Info>
                <ProductCard.Category />
                <ProductCard.Title />
                <ProductCard.Rating />
                <ProductCard.Price />
              </ProductCard.Info>
            }
            action={
              <ProductCard.Button onAddProductToCart={addProductToCart}>
                Add To Cart
              </ProductCard.Button>
            }
          />
        ))}
      </ProductsContainer>
    </ThemeProvider>
  );
};

export default App;
