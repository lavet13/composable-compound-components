import { useContext } from 'react';

import { useProductCardContext } from '../../contexts/product-card.context';
import { ProductsContext } from '../../contexts/products.context';

import { Rating } from '@mui/material';

const ProductRating = () => {
  const { product } = useProductCardContext();
  const { setRating } = useContext(ProductsContext);

  const changeRatingHandler = (_, newValue) => {
    setRating({ ...product, rating: { stars: newValue } });
  };

  return (
    <Rating
      name='rating-controlled'
      value={product.rating.stars}
      onChange={changeRatingHandler}
    />
  );
};

export default ProductRating;
