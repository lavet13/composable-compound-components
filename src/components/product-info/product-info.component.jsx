import { ProductInfoContainer } from './product-info.styles';
import { CardContent } from '@mui/material';

const ProductInfo = ({ children }) => {
  return <CardContent>{children}</CardContent>;
};

export default ProductInfo;
