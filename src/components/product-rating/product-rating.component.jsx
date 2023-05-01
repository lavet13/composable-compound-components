import { useProductCardContext } from '../../contexts/product-card.context';

import FillStar from './fill-star.component';
import OutlineStar from './outline-star.component';

const ProductRating = () => {
  const { product } = useProductCardContext();

  return (
    <span>
      {[1, 2, 3, 4, 5].map(i =>
        i <= product.rating.stars ? (
          <FillStar key={i} />
        ) : (
          <OutlineStar key={i} />
        )
      )}
    </span>
  );
  // return <span>{'★'.repeat(product.rating.stars).padEnd(5, '☆')}</span>;
};

export default ProductRating;
