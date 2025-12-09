import React from 'react';
import { products } from '../ProductPageComponent/ProductData'; 
import Card from '../ProductPageComponent/ProductCard';
import "./ProductCategory.css"

const ProductCategory = (props) => {
  const filteredProducts = products.filter(item => item.type === props.categoryType);

  return (
    <div className="category__page">
      <h2 style={{ padding: "20px" }}>{props.title}</h2>

      <div className="product__grid">
        {filteredProducts.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;