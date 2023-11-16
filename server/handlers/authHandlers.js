const bcrypt = require("bcrypt");

const { generateAccessToken } = require("../utils/auth.js");
const { BlockedTokens, User } = require("../models");
const { sendSignupEmail } = require("../services/email-notifications.js");
const { isEmailValid } = require("../../client/src/utils/validate-email.js");

const signupHandler = async (req, res) => {
  const { username, password, email } = req.body;
  const users = await User.find();
  const user = users.find((user) => user.username === username);
  if (user) {
    return res.status(403).json({ err: "User Already Exists" });
  }
  if (!isEmailValid(email)) {
    return res.status(403).json({ err: "Invalid Email Id" });
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username });
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    await sendSignupEmail({ username, email });
    return res.status(201).json({ username, email });
  } catch (error) {
    return res.status(500).json(error);
  }
};

const loginHandler = async (req, res) => {
  const { username, password } = req.body;
  const users = await User.find();
  const user = users.find((user) => user.username === username);
  if (!user) {
    return res.status(401).json({ err: "Username Not Found" });
  }

  try {
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      const accessToken = generateAccessToken(user);
      return res.status(200).json({ accessToken });
    }
    return res.status(401).json({ err: "Wrong credentials" });
  } catch (err) {
    return res.status(500).json({ err });
  }
};

const logoutHandler = async (req, res) => {
  const authHeader = req.headers["authorization"];
  const accessToken = authHeader && authHeader.split(" ")[1];
  await BlockedTokens.insertMany({ tokens: [accessToken] });
  res.status(204).json({ msg: "You're now logged out." });
};

module.exports = { signupHandler, loginHandler, logoutHandler };
