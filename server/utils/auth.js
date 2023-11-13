require("dotenv").config();
const jwt = require("jsonwebtoken");

const generateAccessToken = ({ username, password }) => {
  return jwt.sign({ username, password }, process.env.ACCESS_TOKEN_SECRET);
};

module.exports = { generateAccessToken };
