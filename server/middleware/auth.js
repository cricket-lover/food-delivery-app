require("dotenv").config();
const jwt = require("jsonwebtoken");
const { doesUserExist, getBlockedTokens } = require("../database");
const { isEmailValid } = require("../utils/validate-email");
const { getAccessTokenFromHeaders } = require("../utils/auth");

const authenticateToken = async (req, res, next) => {
  const accessToken = getAccessTokenFromHeaders(req.headers);
  if (!accessToken) {
    return res.status(401).json({ err: "Unauthorized" });
  }

  const blockedTokens = await getBlockedTokens();
  jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err || blockedTokens.includes(accessToken)) {
      return res.status(403).json({ err: "Access token is not valid" });
    }

    req.user = user;
    next();
  });
};

const validateUserDetails = async (req, res, next) => {
  const { username, email } = req.body;

  if (await doesUserExist(username)) {
    return res.status(403).json({ err: "User Already Exists" });
  }
  if (!isEmailValid(email)) {
    return res.status(403).json({ err: "Invalid Email Id" });
  }

  next();
};

module.exports = { authenticateToken, validateUserDetails };
