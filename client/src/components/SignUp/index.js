import React, { useContext, useState } from "react";
import "./signup.css";
import {
  RestaurantsContext,
  RestaurantsDispatchContext,
} from "../../RestaurantsContext";
import { Link, useNavigate } from "react-router-dom";

export const Signup = () => {
  const navigate = useNavigate();

  const { user } = useContext(RestaurantsContext);
  const { userDispatch } = useContext(RestaurantsDispatchContext);

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    email: "",
  });

  const signUpHandler = async (e) => {
    e.preventDefault();
    const { username, password, email } = credentials;

    if (username === "" || password === "" || email === "") {
      return;
    }
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      if (!response.ok) {
        console.log(response.status);
        return;
      }
      const user = await response.json();
      navigate(-1);
      userDispatch({ type: "create", user });
    } catch (error) {
      console.log(error);
    }
  };

  if (user) {
    return <p>You are already Signed in</p>;
  }

  return (
    <form className="signup-form" onSubmit={signUpHandler}>
      <h3>Create an account</h3>
      <label htmlFor="username" className="label">
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
          className="outline"
        />
      </label>
      <label htmlFor="email" className="label">
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
          className="outline"
        />
      </label>
      <label htmlFor="password" className="label">
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
          className="outline"
        />
      </label>
      <button onClick={signUpHandler} className="signup-btn btn filled">
        Sign Up
      </button>
      <div>
        <span>Already have an account: </span>
        <Link to={"/login"}>
          <button className="btn link-to-btn">Login</button>
        </Link>
      </div>
    </form>
  );
};
