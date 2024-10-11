import React from 'react';
import './ProductPage.module.css';
import { useFindProductQuery } from '../services/queries/useProductQuery';
import { useParams } from 'react-router-dom';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: product, error, isLoading } = useFindProductQuery(String(id));

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="product-container">
      <h1 className="product-title">{product.name}</h1>
      <img src={product.imgUrl} alt={`${product.name} 상품 이미지`} />
      <p className="product-description">가격: {product.price}원</p>
      <button className="add-to-cart-btn">Add to Cart</button>
    </div>
  );
};

export default ProductPage;
