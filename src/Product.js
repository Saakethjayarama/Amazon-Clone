import React from "react";
import "./Product.css";

function Product({ id, title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="produce__price">
          <small>&#8377;</small>
          <strong>{price} (only tonti rs for Saaketh)</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => {
              return <p>⭐</p>;
            })}
        </div>
      </div>
      <img src={image} alt={id + "img"} />
      <button>Add to basket</button>
    </div>
  );
}

export default Product;
