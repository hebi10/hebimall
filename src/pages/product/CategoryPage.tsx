import React from 'react';
import './CategoryPage.module.css';

const CategoryPage: React.FC = () => {
  return (
    <div className="category-container">
      <h1 className="category-title">Product Categories</h1>
      <ul className="category-list">
        <li className="category-item">Electronics</li>
        <li className="category-item">Fashion</li>
        <li className="category-item">Home & Garden</li>
        <li className="category-item">Sports</li>
      </ul>
    </div>
  );
};

export default CategoryPage;
