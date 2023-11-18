require("dotenv").config();
const mongoose = require("mongoose");
const { DB_NAME } = require("../constants");
const { User, BlockedTokens } = require("../models");

const connectDB = async function () {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `MongoDB connection running on ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("MongoDB connection error: ", error);
    process.exit(1);
  }
};

const getCurrentUser = async (username) => {
  const users = await User.find();
  const user = users.find((user) => user.username === username);

  return user;
};

const doesUserExist = async (username) => {
  const users = await User.find();
  const userIndex = users.findIndex((user) => user.username === username);

  return userIndex >= 0;
};

const addNewUser = async (username, email, password) => {
  const users = await User.find();
  users.push({ username });
  const newUser = new User({ username, email, password });
  await newUser.save();
};

const blockAccessToken = async (accessToken) => {
  return await BlockedTokens.insertMany({ tokens: [accessToken] });
};

const getBlockedTokens = async () => {
  return (await BlockedTokens.find()).map((e) => e.tokens[0]);
};

module.exports = {
  connectDB,
  getCurrentUser,
  addNewUser,
  doesUserExist,
  blockAccessToken,
  getBlockedTokens,
};
