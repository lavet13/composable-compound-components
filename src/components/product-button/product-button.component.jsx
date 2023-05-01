import { useProductCardContext } from '../../contexts/product-card.context';
import Button from '../button/button.component';

const ProductButton = ({ onAddProductToCart, children }) => {
  const { product } = useProductCardContext();

  const addProductToCart = () => onAddProductToCart(product);

  return <Button onClick={addProductToCart}>{children}</Button>;
};

export default ProductButton;
