import { useContext } from "react";
import { RestaurantsDispatchContext } from "../../RestaurantsContext";
import { API_URL } from "../../constants";
import { Menu } from "@headlessui/react";
import { enqueueSnackbar } from "notistack";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Logout = () => {
  const { userDispatch } = useContext(RestaurantsDispatchContext);

  const logoutHandler = async (e) => {
    const token = localStorage.getItem("access_token") || "";

    const response = await fetch(`${API_URL}/api/logout`, {
      method: "DELETE",
      headers: { authorization: `Bearer ${token}` },
    });

    if (response.status === 204) {
      localStorage.removeItem("access_token");
      enqueueSnackbar("You logged out Successfully", { variant: "success" });
      userDispatch({ type: "delete" });
      return;
    }
  };

  return (
    <Menu.Item>
      {({ active }) => (
        <button
          className={classNames(
            active ? "bg-gray-100" : "",
            "block px-4 py-2 text-sm text-gray-700"
          )}
          onClick={logoutHandler}
        >
          Sign out
        </button>
      )}
    </Menu.Item>
  );
};
