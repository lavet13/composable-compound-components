import { useProductCardContext } from '../../contexts/product-card.context';
import { ProductImageContainer, Image } from './product-image.styles';

const ProductImage = () => {
  const { product } = useProductCardContext();

  return (
    <ProductImageContainer>
      <Image src={product.image} alt={product.title} />
    </ProductImageContainer>
  );
};

export default ProductImage;
