import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, handleAddToCart }) => {
  return (
    <div className="product-card">
      <a href={`/products/${product._id}`} className="image-container">
        <img src={product.imgUrl} alt={product.title} />
      </a>

      <div className="product-info">
        <p className="brand">{product.brand}</p>
        <p className="title">{product.title}</p>
        <p className="quantity-price">
          {product.quantity} - Rs {product.price}
        </p>

        <div className="price-section">
          <p className="discounted-price">
            Rs {Math.floor(product.price - (product.price * 10) / 100)}
          </p>
          <p className="original-price">
            MRP <span className="strikethrough">Rs {product.price}</span>
          </p>
        </div>

        <button onClick={() => handleAddToCart(product)} className="add-btn">
          Add to Cart
        </button>

        <div className="delivery-info">
          <span className="truck">🚚</span>
          <p>
            It will take {Math.floor(Math.random() * 4) + 1} days to deliver
            your home
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
