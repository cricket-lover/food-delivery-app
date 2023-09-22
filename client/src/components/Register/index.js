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
    <form
      className="flex flex-col w-80 gap-4 border border-solid border-current p-8"
      onSubmit={registerHandler}
    >
      <h3 className="text-xl font-bold underline text-center">
        Create an account
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
      <label htmlFor="email" className="flex justify-between h-8 leading-8">
        Email:
        <input
          type="text"
          name="email"
          onChange={(e) =>
            setCredentials((credentials) => ({
              ...credentials,
              email: e.target.value,
            }))
          }
          value={credentials.email}
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
          className="placeholder:italic placeholder:text-slate-400 w-64 border border-solid border-current text-current bg-transparent"
        />
      </label>
      <button
        onClick={registerHandler}
        className="rounded-md font-bold p-2 outline-none border-none cursor-pointer bg-primary-color text-primary-color-light"
      >
        Register
      </button>
      <div>
        <span>Already have an account: </span>
        <Link to={"/login"}>
          <button className="rounded-md font-bold p-2 outline-none border-none cursor-pointer underline">
            Login
          </button>
        </Link>
      </div>
    </form>
  );
};
