import React from "react";
import "./Checkout.css";
import CheckoutProduct from "../CheckoutProduct";
import { useStateValue } from "../../context/StateProvider";

function Checkout() {
  const [{ basket }] = useStateValue();
  console.log(basket);

  return (
    <div className="checkout">
      <img
        src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
        className="checkout__ad"
        alt="add"
      />
      {basket?.length === 0 ? (
        <p className="checkout__title">Cart is empty :(</p>
      ) : (
        <div className="checkout__title">
          <h2>Your shopping Basket</h2>
          {/* Checkout Products */}
          {basket?.map((item) => {
            return (
              <CheckoutProduct
                item={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Checkout;
