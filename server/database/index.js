require("dotenv").config();
const mongoose = require("mongoose");
const { DB_NAME } = require("../constants");

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

module.exports = { connectDB };
