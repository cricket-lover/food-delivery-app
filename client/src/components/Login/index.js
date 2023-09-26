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
    return <h2 className="text-gray-800">You are already logged in.</h2>;
  }

  return (
    <div className="w-full flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-96 sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={loginHandler}>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                id="username"
                type="text"
                name="username"
                autoComplete="username"
                onChange={(e) =>
                  setCredentials((credentials) => ({
                    ...credentials,
                    username: e.target.value,
                  }))
                }
                value={credentials.username}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <Link
                  to="/forget-password"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </Link>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                onChange={(e) =>
                  setCredentials((credentials) => ({
                    ...credentials,
                    password: e.target.value,
                  }))
                }
                value={credentials.password}
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              onClick={loginHandler}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link
            to={"/register"}
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};
