import { Link } from "react-router-dom";
import "./header.css";
import { CartIcon } from "../CartIcon";
import { InputBox } from "../InputBox";
import { useContext } from "react";
import { RestaurantsContext } from "../../RestaurantsContext";

export const Header = ({ brandName, setQuery }) => {
  const { cartItems } = useContext(RestaurantsContext);

  return (
    <header className="header">
      <h1 className="brand-name">
        <Link to={"/"}>{brandName}</Link>
      </h1>
      <InputBox onQueryChange={setQuery} />
      <CartIcon count={cartItems.length} />
    </header>
  );
};
