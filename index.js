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
const blockedTokens = JSON.parse(
  fs.readFileSync("./data/blockedTokens.json", "utf8")
);

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const accessToken = authHeader && authHeader.split(" ")[1];
  if (!accessToken) {
    return res.status(401).json({ err: "Unauthorized" });
  }
  jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    console.log("Is Valid --->", err, user, blockedTokens);
    if (err || blockedTokens.includes(accessToken)) {
      return res.status(403).json({ err: "Access token is not valid" });
    }

    req.user = user;
    next();
  });
};

const generateAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
};

app.get("/api/ping", authenticateToken, (req, res) => {
  res.json({ msg: "Pong" });
});

app.get("/api/getAllRestaurants", (req, res) => {
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
      return res.status(200).json({ accessToken });
    }
    return res.status(401).json({ err: "Wrong credentials" });
  } catch (err) {
    return res.status(500).json({ err });
  }
});

app.delete("/api/logout", authenticateToken, (req, res) => {
  const authHeader = req.headers["authorization"];
  const accessToken = authHeader && authHeader.split(" ")[1];
  fs.writeFileSync(
    "./data/blockedTokens.json",
    JSON.stringify([...blockedTokens, accessToken])
  );
  res.status(204).json({ msg: "You're now logged out." });
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
