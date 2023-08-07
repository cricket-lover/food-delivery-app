import { Link } from "react-router-dom";
import "./header.css";
import { CartIcon } from "../CartIcon";
import { InputBox } from "../InputBox";
import { Logout } from "../Logout";
import { useContext } from "react";
import { RestaurantsContext } from "../../RestaurantsContext";

export const Header = () => {
  const { user } = useContext(RestaurantsContext);
  const token = localStorage.getItem("access_token") || "";

  const protectedRouteHandler = () => {
    fetch("/api/ping", {
      headers: { authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.err) {
          throw new Error(data.err);
        }
        console.log(data);
      })
      .catch((err) => console.error(err));
  };
  return (
    <header className="header">
      <h1 className="brand-name">
        <Link to={"/"}>FoodKaro</Link>
      </h1>
      <InputBox />
      {user ? <Logout /> : <Link to={"/login"}>Login</Link>}
      {<button onClick={protectedRouteHandler}>Protected Route</button>}
      <CartIcon />
    </header>
  );
};
