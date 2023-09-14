import mongoose from "mongoose";

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
export { UniversalLink };
