import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    //Add item to basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

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
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
