require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

const isPasswordValid = async (actualPassword, expectedPassword) => {
  return await bcrypt.compare(actualPassword, expectedPassword);
};

const generateAccessToken = ({ username, password }) => {
  return jwt.sign({ username, password }, process.env.ACCESS_TOKEN_SECRET);
};

const getAccessTokenFromHeaders = (headers) => {
  const authHeader = headers["authorization"];
  const accessToken = authHeader && authHeader.split(" ")[1];

  return accessToken;
};

module.exports = {
  generateAccessToken,
  hashPassword,
  isPasswordValid,
  getAccessTokenFromHeaders,
};
