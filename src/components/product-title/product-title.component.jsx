import { useProductCardContext } from '../../contexts/product-card.context';

const ProductTitle = () => {
  const { product } = useProductCardContext();
  return <span>{product.title}</span>;
};

export default ProductTitle;
