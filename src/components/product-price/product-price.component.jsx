import { useProductCardContext } from '../../contexts/product-card.context';

import { Typography } from '@mui/material';

const ProductPrice = ({ currency = 'EUR' }) => {
  const { product } = useProductCardContext();

  return (
    <Typography component='legend'>
      {new Intl.NumberFormat(navigator.language, {
        style: 'currency',
        currency,
      }).format(product.price)}
    </Typography>
  );
};

export default ProductPrice;
