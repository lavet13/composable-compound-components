import { useProductCardContext } from '../../contexts/product-card.context';
import { ProductImageContainer, Image } from './product-image.styles';
import { CardMedia } from '@mui/material';

const ProductImage = () => {
  const { product } = useProductCardContext();

  return (
    <CardMedia
      component='img'
      sx={{ height: '200px' }}
      image={product.image}
      title={product.title}
      alt={product.title}
    />
  );
};

export default ProductImage;
