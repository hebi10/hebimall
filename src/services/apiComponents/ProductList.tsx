import { useProductQuery } from '../queries/useProductQuery';
import { Link } from 'react-router-dom';
import styles from './ProductList.module.css'

type Product = {
  _id: string;
  name: string;
  price: number;
  description: string;
  imgUrl: string;
  category: string;
};

const ProductList = () => {
  const { data, error, isLoading } = useProductQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className={styles.productWrap}>
      <h1>Product List</h1>
      <ul>
        {data.map((product: Product) => (
          <li key={product._id}>
            <Link to={`/product/${product._id}`}>
              <img src={product.imgUrl} alt={`${product.name} 상품 이미지`} />
              <strong>{product.name}</strong>
              <p>{product.price}원</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
