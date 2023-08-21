const mongoose = require("mongoose");

const universalLinkSchema = mongoose.Schema({
  appID: {
    type: String,
    required: true,
  },
  paths: {
    type: [String],
    required: true,
  },
});

const UniversalLink = mongoose.model("UniversalLink", universalLinkSchema);
module.exports = UniversalLink;
