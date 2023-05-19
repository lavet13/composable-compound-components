import { useProductCardContext } from '../../contexts/product-card.context';
import { Button, CardActions } from '@mui/material';

const ProductButton = ({ onAddProductToCart, children }) => {
  const { product } = useProductCardContext();

  const addProductToCart = () => onAddProductToCart(product);

  return (
    <CardActions>
      <Button
        color='secondary'
        variant='contained'
        size='large'
        onClick={addProductToCart}
      >
        {children}
      </Button>
    </CardActions>
  );
};

export default ProductButton;
