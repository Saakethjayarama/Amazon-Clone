export const initialState = {
  basket: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      // Logic for adding item to basket
      break;

    case "REMOVE_FROM_BASKET":
      //Logic for removing item from basket
      break;

    default:
      return state;
  }
};

export default reducer;
