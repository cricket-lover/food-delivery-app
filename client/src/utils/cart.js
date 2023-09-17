export const increaseQuantity = (cartDispatch, cartItem) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    id,
  } = cartItem.item;
  cartDispatch({
    type: "increase_quantity",
    item: {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      deliveryTime,
      id,
    },
  });
};

export const decreaseQuantity = (cartDispatch, cartItem) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    id,
  } = cartItem.item;

  if (cartItem.quantity === 1) {
    cartDispatch({
      type: "remove_from_cart",
      item: {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        deliveryTime,
        id,
      },
    });
    return;
  }
  cartDispatch({
    type: "decrease_quantity",
    item: {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      deliveryTime,
      id,
    },
  });
};
