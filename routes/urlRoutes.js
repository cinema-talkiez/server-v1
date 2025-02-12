const express = require("express");
const { saveUrl, getUrl } = require("../controllers/urlController");

const router = express.Router();

router.post("/save", saveUrl); // Save a URL
router.get("/retrieve", getUrl); // Retrieve a URL

module.exports = router;
