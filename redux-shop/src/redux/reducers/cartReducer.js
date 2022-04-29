const cartReducer = (cart = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let tempCart = cart.filter((item) => item.id === action.payload.item);

      if (tempCart < 1) {
        return [...cart, action.payload];
      } else {
        return cart;
      }

    default:
      return cart;
  }
};
