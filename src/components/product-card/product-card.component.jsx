import ProductCardContext from '../../contexts/product-card.context';
import ProductButton from '../product-button/product-button.component';
import ProductCategory from '../product-category/product-category.component';

import ProductImage from '../product-image/product-image.component';
import ProductInfo from '../product-info/product-info.component';
import ProductPrice from '../product-price/product-price.component';
import ProductRating from '../product-rating/product-rating.component';
import ProductTitle from '../product-title/product-title.component';

import { Card } from '@mui/material';

import { ProductCardBottom } from './product-card.styles';

const ProductCard = ({ image, info, action, product }) => {
  return (
    <ProductCardContext.Provider value={{ product }}>
      <Card sx={{ maxWidth: '100%' }}>
        {image}
        <ProductCardBottom>
          {info}
          {action}
        </ProductCardBottom>
      </Card>
    </ProductCardContext.Provider>
  );
};

ProductCard.Image = ProductImage;
ProductCard.Info = ProductInfo;
ProductCard.Title = ProductTitle;
ProductCard.Category = ProductCategory;
ProductCard.Rating = ProductRating;
ProductCard.Price = ProductPrice;
ProductCard.Button = ProductButton;

export default ProductCard;
