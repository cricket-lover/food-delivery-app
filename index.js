const express = require("express");
const { restaurants } = require("./data/restaurants");
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());

if (process.env.NODE_ENV === "production") {
  const path = require("path");
  app.use(express.static(path.resolve(__dirname, "client", "build")));
  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "client", "build", "index.html"),
      function (err) {
        if (err) {
          res.status(500).send(err);
        }
      }
    );
  });
}

app.get("/ping", (req, res) => {
  res.json({ msg: "Pong" });
});

app.get("/getAllRestaurants", (req, res) => {
  res.status(200).json(restaurants);
});

app.all("/*", (req, res) => {
  res.json({ error: "Page Not Found" });
});

app.listen(PORT, () => console.log("Listening on Port", PORT));
