const {
  generateAccessToken,
  hashPassword,
  isPasswordValid,
  getAccessTokenFromHeaders,
} = require("../utils/auth.js");
const { sendSignupEmail } = require("../services/email-notifications.js");
const {
  addNewUser,
  doesUserExist,
  getCurrentUser,
  blockAccessToken,
} = require("../database/index.js");

const handleRegister = async (req, res) => {
  const { username, password, email } = req.body;

  try {
    const hashedPassword = await hashPassword(password);
    await addNewUser(username, email, hashedPassword);
    await sendSignupEmail({ username, email });
    return res.status(201).json({ username, email });
  } catch (error) {
    return res.status(500).json(error);
  }
};

const handleLogin = async (req, res) => {
  const { username, password } = req.body;

  try {
    if (!(await doesUserExist(username))) {
      return res.status(401).json({ err: "Username Not Found" });
    }
    const user = await getCurrentUser(username);
    if (await isPasswordValid(password, user.password)) {
      const accessToken = generateAccessToken(user);
      return res.status(200).json({ accessToken });
    }
    return res.status(401).json({ err: "Wrong credentials" });
  } catch (err) {
    return res.status(500).json({ err });
  }
};

const handleLogout = async (req, res) => {
  const accessToken = getAccessTokenFromHeaders(req.headers);
  try {
    await blockAccessToken(accessToken);
    res.status(204).json({ msg: "You're now logged out." });
  } catch (error) {
    res.status(500).json({ msg: "There is a error while logging out" });
  }
};

module.exports = { handleRegister, handleLogin, handleLogout };
