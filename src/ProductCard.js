import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'; 

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}  state={ product } >
      <img src={product.imageUrl} alt={product.name}  />
      </Link>
      <h3>{product.name}</h3>
      <p>Ціна: {product.price} грн</p>
      <button>Додати до кошика</button>
    </div>
  );
};

export default ProductCard;