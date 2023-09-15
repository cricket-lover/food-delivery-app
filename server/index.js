const express = require("express");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const morgan = require("morgan");
const Razorpay = require("razorpay");
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
app.use(cors());
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Hey this is my API running 🥳");
});

app.get("/api/ping", authenticateToken, (req, res) => {
  res.json({ msg: "Pong" });
});

app.get("/api/live", (req, res) => {
  res.send(true);
});

app.get("/api/restaurants", getAllRestaurants);

app.post("/api/register", signupHandler);

app.post("/api/login", loginHandler);

app.post("/orders", async (req, res) => {
  try {
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET,
    });

    const options = {
      amount: req.body.amount, // amount in smallest currency unit
      currency: "INR",
    };

    const order = await instance.orders.create(options);

    if (!order) return res.status(500).send("Some error occured");

    res.json(order);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/payment/success", (req, res) =>
  res.json({ msg: "Payment Successful", success: true })
);

app.delete("/api/logout", authenticateToken, logoutHandler);

app.all("/api/*", pageNotFoundHandler);

app.listen(PORT, () => console.log("Listening on Port", PORT));
