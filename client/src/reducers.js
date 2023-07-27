export const queryReducer = (query, action) => {
  switch (action.type) {
    case "searched": {
      return action.query;
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
        return [
          ...cartItems.slice(0, index),
          { item: action.item, quantity: cartItems[index].quantity + 1 },
          ...cartItems.slice(index + 1),
        ];
      }
      return [...cartItems, { item: action.item, quantity: 1 }];
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};
