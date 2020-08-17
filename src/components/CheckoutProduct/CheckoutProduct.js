import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../../context/StateProvider";

function CheckoutProduct({ item, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeItem = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: item,
    });
  };

  return (
    <div className="checkoutProduct">
      <img src={image} className="checkoutProduct__image" alt="" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>&#8377;</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => {
              return <p>⭐</p>;
            })}
        </div>

        <button onClick={removeItem}>Remove From the basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
