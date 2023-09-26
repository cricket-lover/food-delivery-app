import { Link } from "react-router-dom";
import { CartIcon } from "../CartIcon";
import { InputBox } from "../InputBox";
import { Logout } from "../Logout";
import { useContext } from "react";
import { RestaurantsContext } from "../../RestaurantsContext";

export const Header = () => {
  const { user } = useContext(RestaurantsContext);

  return (
    <header className="flex flex-wrap gap-4 p-4 items-center justify-end">
      <h1 className="font-bold text-3xl mr-auto">
        <Link to={"/"}>FoodKaro</Link>
      </h1>
      <InputBox />
      {user ? <Logout /> : <Link to={"/login"}>Login</Link>}
      <CartIcon />
    </header>
  );
};
