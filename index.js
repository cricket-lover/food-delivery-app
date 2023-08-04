const express = require("express");
const fs = require("fs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const { restaurants } = require("./data/restaurants");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cookieParser());

const users = JSON.parse(fs.readFileSync("./data/users.json", "utf8"));
const refreshTokens = JSON.parse(
  fs.readFileSync("./data/refreshTokens.json", "utf8")
);

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const accessToken = authHeader && authHeader.split(" ")[1];
  const refreshToken = req.cookies.refresh_token;
  if (!accessToken) {
    return res.status(401).json({ err: "Unauthorized" });
  }
  jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (user) {
      req.user = user;
      next();
    }

    if (!refreshToken)
      return res.status(403).json({ err: "Refresh token not found" });
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
      if (err) return res.status(403).json({ err });
      const accessToken = generateAccessToken({ name: user.username });
      return res.json({ accessToken });
    });
    return res.status(403).json({ err: "Forbidden" });
  });
};

const generateAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "2m" });
};

app.get("/api/ping", (req, res) => {
  res.json({ msg: "Pong" });
});

app.get("/api/getAllRestaurants", authenticateToken, (req, res) => {
  res.status(200).json(restaurants);
});

app.post("/api/signup", async (req, res) => {
  const { username, password, email } = req.body;
  const user = users.find((user) => user.username === username);
  if (user) {
    return res.status(403).json({ err: "User Already Exists" });
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, password: hashedPassword });
    fs.writeFileSync(
      "./data/users.json",
      JSON.stringify(users, null, 2),
      "utf8"
    );
    return res.status(201).json({ username, email });
  } catch (error) {
    return res.sendStatus(500);
  }
});

app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  const user = users.find((user) => user.username === username);
  if (!user) {
    return res.status(401).json({ err: "Username Not Found" });
  }

  try {
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
      const accessToken = generateAccessToken(user);

      const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
      // fs.writeFileSync(
      //   "./data/refreshTokens.json",
      //   JSON.stringify([...refreshTokens, refreshToken], null, 2),
      //   "utf8"
      // );
      return res
        .cookie("refresh_token", refreshToken, {
          secure: process.env.NODE_ENV === "production", // Set to true if using HTTPS
          httpOnly: true,
          sameSite: "strict", // Adjust to your requirements
        })
        .status(200)
        .json({ accessToken });
    }
    return res.status(401).json({ err: "Wrong credentials" });
  } catch (err) {
    return res.status(500).json({ err });
  }
});

app.post("/api/token", (req, res) => {
  const token = req.cookies.refresh_token;
  if (!token) return res.status(403).json({ err: "Refresh token not found" });

  if (!refreshTokens.includes(token))
    return res.status(403).json({ err: "Refresh token is not valid" });
  jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).json({ err });
    const accessToken = generateAccessToken({ name: user.username });
    return res.json({ accessToken });
  });
});

app.delete("/api/logout", (req, res) => {
  // refreshTokens = refreshTokens.filter((token) => token !== req.body.token);
  res
    .clearCookie("refresh_token")
    .status(204)
    .json({ message: "You're now logged out." });
});

app.all("/api/*", (req, res) => {
  res.status(404).json({ err: "Page Not Found in the server" });
});

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
