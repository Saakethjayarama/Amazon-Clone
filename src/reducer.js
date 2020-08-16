export const initialState = {
  basket: [
    {
      id: "123",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81j14WXbc%2BL._UL1500_.jpg",
      price: 303,
      rating: 3,
      title: "Redux Analogue Blue Dial Men’s & Boy's Watch RWS0230S",
    },
  ],
};

const reducer = (state, action) => {
  console.log("action: ", action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      // Logic for adding item to basket
      return { ...state, basket: [...state.basket, action.item] };

    case "REMOVE_FROM_BASKET":
      //Logic for removing item from basket
      let newBasket = [...state.basket];
      console.log("basket", newBasket);

      const index = state.basket.findIndex((basketItem) => {
        return basketItem.id === action.id;
      });

      if (index >= 0) {
        console.log("type", typeof newBasket);
        newBasket.splice(index, 1);
      } else {
        console.warn(`product ${action.id} is not in basket`);
      }
      return { ...state, basket: newBasket };

    default:
      return state;
  }
};

export default reducer;
