import express from "express";
import {
  getAASA,
  getApplinks,
} from "../controllers/universalLinkController.js";
const universalLinkRoute = express.Router();

universalLinkRoute.get("/.well-known/apple-app-site-association/", getAASA);
universalLinkRoute.get("/.well-known/assetlinks.json", getApplinks);

export { universalLinkRoute };
