import { useContext } from "react";
import { RestaurantsDispatchContext } from "../../RestaurantsContext";

export const Logout = () => {
  const { userDispatch } = useContext(RestaurantsDispatchContext);

  const logoutHandler = async (e) => {
    const response = await fetch("/api/logout", {
      method: "DELETE",
    });

    if (response.status === 204) {
      console.log("User Logged out successfully");
      sessionStorage.removeItem("access_token");
      userDispatch({ type: "delete" });
      return;
    }
  };
  return (
    <button className="btn" onClick={logoutHandler}>
      Logout
    </button>
  );
};
