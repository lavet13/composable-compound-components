import { useProductCardContext } from '../../contexts/product-card.context';

const ProductPrice = ({ currency = 'EUR' }) => {
  const { product } = useProductCardContext();

  return (
    <span>
      {new Intl.NumberFormat(navigator.language, {
        style: 'currency',
        currency,
      }).format(product.price)}
    </span>
  );
};

export default ProductPrice;
