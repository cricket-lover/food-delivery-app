import PropTypes from "prop-types";
import { Card, NoCardsFound } from "../";

import "./cards.css";

export const Cards = ({ restaurants, addToCart }) => {
  if (restaurants.length === 0) {
    return <NoCardsFound msg={"No Restarants Found"} />;
  }

  return (
    <div className="cards">
      {restaurants.map((restaurant) => (
        <Card key={restaurant.id} {...restaurant} addToCart={addToCart} />
      ))}
    </div>
  );
};

Cards.propTypes = {
  restaurants: PropTypes.array,
};
