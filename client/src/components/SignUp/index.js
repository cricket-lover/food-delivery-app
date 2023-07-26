import React, { useState } from "react";
import "./signup.css";

export const SignUp = ({ setIsSignedUp }) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    email: "",
  });

  const signUpHandler = (e) => {
    e.preventDefault();
    fetch("/signUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((res) => res.json())
      .then((data) => setIsSignedUp(data));
  };

  return (
    <form className="signup-form">
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
        />
      </label>
      <button onClick={signUpHandler} className="signup-btn">
        Sign Up
      </button>
    </form>
  );
};
