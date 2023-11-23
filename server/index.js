require("dotenv").config();
const { app } = require("./app.js");
const { connectDB } = require("./database");

const PORT = process.env.PORT || 5000;
connectDB();

app.listen(PORT, () => console.log("Listening on Port", PORT));
