const express = require("express");
const router = express.Router();
const { getAASA } = require("../controllers/universalLinkController");

router.get("/", getAASA);

module.exports = router;
