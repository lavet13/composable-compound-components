import { useProductCardContext } from '../../contexts/product-card.context';
import { Typography } from '@mui/material';

const ProductTitle = () => {
  const { product } = useProductCardContext();
  return (
    <Typography variant='subtitle2' color='text.secondary'>
      {product.title}
    </Typography>
  );
};

export default ProductTitle;
