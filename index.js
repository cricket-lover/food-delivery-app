const express = require("express");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const { authenticateToken } = require("./middleware");
const {
  getAllRestaurants,
  pageNotFoundHandler,
} = require("./handlers/restaurantsHandler");
const {
  signupHandler,
  loginHandler,
  logoutHandler,
} = require("./handlers/authHandlers");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cookieParser());

app.get("/api/ping", authenticateToken, (req, res) => {
  res.json({ msg: "Pong" });
});

app.get("/api/restaurants", getAllRestaurants);

app.post("/api/signup", signupHandler);

app.post("/api/login", loginHandler);

app.delete("/api/logout", authenticateToken, logoutHandler);

app.all("/api/*", pageNotFoundHandler);

if (process.env.NODE_ENV === "production") {
  const path = require("path");
  app.use(express.static(path.resolve(__dirname, "client", "build")));
  app.get("/*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "client", "build", "index.html"),
      function (err) {
        if (err) {
          res.status(500).json(err);
        }
      }
    );
  });
}

app.listen(PORT, () => console.log("Listening on Port", PORT));
