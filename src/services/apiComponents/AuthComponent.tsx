import React from 'react';
import { useSelector } from 'react-redux';

const ProductList = () => {
  // const products = useSelector((state: RootState) => state.products.items);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {/* {products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))} */}
      </ul>
    </div>
  );
};

export default ProductList;
