const {
  generateAccessToken,
  hashPassword,
  isPasswordValid,
} = require("../utils/auth.js");
const { sendSignupEmail } = require("../services/email-notifications.js");
const {
  addNewUser,
  doesUserExist,
  getCurrentUser,
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
  if (!(await doesUserExist(username))) {
    return res.status(401).json({ err: "Username Not Found" });
  }

  try {
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
  const authHeader = req.headers["authorization"];
  const accessToken = authHeader && authHeader.split(" ")[1];
  await blockAccessToken(accessToken);
  res.status(204).json({ msg: "You're now logged out." });
};

module.exports = { handleRegister, handleLogin, handleLogout };
