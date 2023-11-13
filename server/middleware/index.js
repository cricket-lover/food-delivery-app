require("dotenv").config();
const jwt = require("jsonwebtoken");
const { BlockedTokens } = require("../models");

const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const accessToken = authHeader && authHeader.split(" ")[1];
  if (!accessToken) {
    return res.status(401).json({ err: "Unauthorized" });
  }

  const blockedTokens = (await BlockedTokens.find()).map((e) => e.tokens[0]);
  jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err || blockedTokens.includes(accessToken)) {
      return res.status(403).json({ err: "Access token is not valid" });
    }

    req.user = user;
    next();
  });
};

module.exports = { authenticateToken };
