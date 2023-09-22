import React, { useContext, useState } from "react";
import {
  RestaurantsContext,
  RestaurantsDispatchContext,
} from "../../RestaurantsContext";
import { Link, useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
import { API_URL } from "../../constants";

export const Login = () => {
  const { user } = useContext(RestaurantsContext);
  const { userDispatch } = useContext(RestaurantsDispatchContext);

  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const loginHandler = async (e) => {
    e.preventDefault();
    const response = await fetch(`${API_URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const { err, accessToken } = await response.json();
    if (err) {
      enqueueSnackbar(err, { variant: "error" });
      return;
    }
    localStorage.setItem("access_token", accessToken);
    navigate(-1);
    enqueueSnackbar("Login Successful", { variant: "success" });
    userDispatch({ type: "create", user: JSON.stringify(credentials) });
  };

  if (user) {
    return;
  }

  return (
    <form className="flex flex-col w-80 gap-5 border border-solid border-current p-8">
      <h3 className="text-xl font-bold underline text-center">
        Login to your account
      </h3>
      <label htmlFor="username" className="flex justify-between h-8 leading-8">
        Username:
        <input
          type="text"
          name="username"
          onChange={(e) =>
            setCredentials((credentials) => ({
              ...credentials,
              username: e.target.value,
            }))
          }
          value={credentials.username}
          className="placeholder:italic placeholder:text-slate-400 w-64 border border-solid border-current text-current bg-transparent"
        />
      </label>
      <label htmlFor="password" className="flex justify-between h-8 leading-8">
        Password:
        <input
          type="password"
          name="password"
          onChange={(e) =>
            setCredentials((credentials) => ({
              ...credentials,
              password: e.target.value,
            }))
          }
          value={credentials.password}
          className="placeholder:italic placeholder:text-slate-400 border border-solid border-current text-current bg-transparent"
        />
      </label>
      <button
        onClick={loginHandler}
        className="login-btn rounded-md font-bold p-2 outline-none border-none cursor-pointer bg-primary-color text-primary-color-light"
      >
        Login
      </button>
      <div>
        <span>Don't have an account: </span>
        <Link to={"/register"}>
          <button className="rounded-md font-bold p-2 outline-none border-none cursor-pointer underline">
            Register
          </button>
        </Link>
      </div>
    </form>
  );
};
