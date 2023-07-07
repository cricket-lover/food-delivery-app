const express = require("express");
const { restaurants } = require("./data/restaurants");
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());

app.get("/getAllRestaurants", (req, res) => {
  res.status(200).json(restaurants);
});

app.post("/authenticate", (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);
  res.json(
    `Hey ${name}! Your Password is: ${password} and email id is : ${email}`
  );
});

app.listen(PORT, () => console.log("Listening on Port", PORT));
