import React from "react";
import "./assets/styles.css";

export function ProductList({ products, onAddToCart }) {
  if (products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.product_id} className="product-card">
          <img
            src={product.images[0]}
            alt={product.name}
            loading="lazy"
            onError={(e) => {
              e.target.src = "https://postimg.cc/gallery/Hsqw7c4";
            }}
          />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => onAddToCart(product.product_id)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
