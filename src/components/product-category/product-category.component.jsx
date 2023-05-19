import { useProductCardContext } from '../../contexts/product-card.context';
import { Typography } from '@mui/material';

const ProductCategory = () => {
  const { product } = useProductCardContext();
  return (
    <Typography variant='subtitle1' component='div'>
      {product.category}
    </Typography>
  );
};

export default ProductCategory;
