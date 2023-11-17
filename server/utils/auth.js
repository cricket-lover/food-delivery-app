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

module.exports = { generateAccessToken, hashPassword, isPasswordValid };
