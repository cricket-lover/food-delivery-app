const mongoose = require("mongoose");

const blockedTokensSchema = new mongoose.Schema(
  {
    tokens: [String],
  },
  { timestamps: true }
);

const BlockedTokens = mongoose.model("BlockedTokens", blockedTokensSchema);

module.exports = BlockedTokens;
