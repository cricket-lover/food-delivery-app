import { useContext } from "react";
import { RestaurantsContext } from "../RestaurantsContext";
import { StarRating } from "../components/StarRating";

export const Cart = () => {
  const { cartItems } = useContext(RestaurantsContext);

  if (cartItems.length === 0) {
    return <div className="cart-page-container">Cart Empty</div>;
  }

  return (
    <div className="cart-page-container">
      {cartItems.map(({ item, quantity }) => {
        return (
          <div key={item.id}>
            {item.name}: {quantity}
            <StarRating value={item.avgRating} />
          </div>
        );
      })}
    </div>
  );
};
