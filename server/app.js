const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const morgan = require("morgan");
const {
  authenticateToken,
  validateUserDetails,
} = require("./middleware/auth.js");
const {
  getAllRestaurants,
  pageNotFoundHandler,
} = require("./handlers/restaurantsHandler");
const {
  handleRegister,
  handleLogin,
  handleLogout,
} = require("./handlers/authHandlers");
const {
  handleOrders,
  handlePaymentSuccess,
} = require("./handlers/paymentHandlers.js");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(morgan("tiny"));

app.get("/api/restaurants", getAllRestaurants);

app.post("/api/register", validateUserDetails, handleRegister);
app.post("/api/login", handleLogin);
app.post("/orders", handleOrders);
app.post("/payment/success", handlePaymentSuccess);

app.delete("/api/logout", authenticateToken, handleLogout);

app.all("/api/*", pageNotFoundHandler);

module.exports = { app };
