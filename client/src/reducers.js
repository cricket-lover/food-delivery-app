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
      return [...cartItems, action.item];
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};
