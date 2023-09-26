import React, { useContext, useState } from "react";
import { RestaurantsContext } from "../../RestaurantsContext";
import { Link, useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
import { API_URL } from "../../constants";

export const Register = () => {
  const navigate = useNavigate();

  const { user } = useContext(RestaurantsContext);

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    email: "",
  });

  if (user)
    return <h2 className=" text-gray-800">You are already logged in</h2>;

  const registerHandler = async (e) => {
    e.preventDefault();
    const { username, password, email } = credentials;

    if (username === "" || password === "" || email === "") {
      return;
    }
    try {
      const response = await fetch(`${API_URL}/api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.err);
      }
      navigate(-1);
      enqueueSnackbar("Register Successful", { variant: "success" });
    } catch (error) {
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };

  if (user) {
    return <p>You are already Signed in</p>;
  }

  return (
    <div className="w-full flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-96 sm:max-w-sm ">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create an account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={registerHandler}>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Username
            </label>
            <div>
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
            <label
              htmlFor="email"
              className="flex justify-between h-8 leading-8"
            >
              Email:
            </label>
            <div>
              <input
                id="email"
                type="text"
                name="email"
                autoComplete="email"
                onChange={(e) =>
                  setCredentials((credentials) => ({
                    ...credentials,
                    email: e.target.value,
                  }))
                }
                value={credentials.email}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="password"
              className="flex justify-between h-8 leading-8"
            >
              Password:
            </label>
            <div>
              <input
                id="password"
                type="password"
                name="password"
                autoComplete="password"
                onChange={(e) =>
                  setCredentials((credentials) => ({
                    ...credentials,
                    password: e.target.value,
                  }))
                }
                value={credentials.password}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <button
            type="submit"
            onClick={registerHandler}
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Register
          </button>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            to={"/login"}
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};
