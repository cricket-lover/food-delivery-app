import PropTypes from "prop-types";
import { Card, NoCardsFound } from "..";

export const Cards = ({ restaurants }) => {
  if (restaurants.length === 0) {
    return <NoCardsFound msg={"No Restarants Found"} />;
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 w-auto">
      {restaurants.map((restaurant) => (
        <Card key={restaurant.data.id} {...restaurant} />
      ))}
    </div>
  );
};

Cards.propTypes = {
  restaurants: PropTypes.array,
};
