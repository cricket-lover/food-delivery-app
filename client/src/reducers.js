export const queryReducer = (displayOptions, action) => {
  switch (action.type) {
    case "searched": {
      return { ...displayOptions, query: action.query };
    }
    case "sort": {
      return { ...displayOptions, sortOption: action.sortOption };
    }
    case "toggle_pagination": {
      return {
        ...displayOptions,
        showPagination: !displayOptions.showPagination,
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

export const paginationReducer = (pageNumber, action) => {
  switch (action.type) {
    case "first_page": {
      return 1;
    }
    case "last_page": {
      return action.pageNumber;
    }
    case "prev_page": {
      return pageNumber - 1;
    }
    case "next_page": {
      return pageNumber + 1;
    }
    case "click_page_number": {
      return action.pageNumber;
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

export const restaurantsReducer = (restaurants, action) => {
  switch (action.type) {
    case "load": {
      return action.restaurants;
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

export const userReducer = (user, action) => {
  switch (action.type) {
    case "create": {
      return action.user;
    }

    case "delete": {
      return null;
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};
