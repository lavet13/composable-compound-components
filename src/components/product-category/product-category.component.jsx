import { useProductCardContext } from '../../contexts/product-card.context';

const ProductCategory = () => {
  const { product } = useProductCardContext();
  return <span>{product.category}</span>;
};

export default ProductCategory;
