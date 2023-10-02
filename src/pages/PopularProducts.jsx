import { products } from "../components/Products";
import './PopularProducts.css'
import '../index.css'
import { useState } from "react";

function PopularProducts() {
  const trendProducts = products.filter((item) => item.popular === true);

  return (
    <div className="all-trends-products">
      <h1>Popular Products</h1>
      <div className="trend-products-container">
        {trendProducts.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

function ProductItem({ item }) {

  return (
    <div className="product-container">
      <img className='product-image' src={item.imgFace} alt="product-image"/>
      <img className='product-image hovered' src={item.imgBack} alt="product-image"/>
        <div className="description-container">
          <h5>{item.title}</h5>
          <h6>{item.price}</h6>
        </div>
    </div>
  );
}

export default PopularProducts;

