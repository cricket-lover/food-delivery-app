export const queryReducer = (query, action) => {
  switch (action.type) {
    case "searched": {
      return query;
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

export const cartReducer = (cartItems, action) => {
  switch (action.type) {
    case "add_to_cart": {
      const index = cartItems.findIndex(({ item }) => {
        return item.id === action.item.id;
      });
      if (index >= 0) {
        cartItems[index].quantity++;
      } else {
        cartItems = cartItems.concat({ item: action.item, quantity: 0 });
      }
      return cartItems;
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};
