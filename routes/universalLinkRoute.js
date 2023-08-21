const express = require("express");
const router = express.Router();
const {
  getAASA,
  getApplinks,
} = require("../controllers/universalLinkController");

router.get("/.well-known/apple-app-site-association/", getAASA);
router.get("/.well-known/assetlinks.json", getApplinks);

module.exports = router;
