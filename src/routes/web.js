const express = require("express");
const { getHomePage, getSamplePage } = require("../controllers/homeController");
const router = express.Router();

router.get("/home", getHomePage);

router.get("/sample", getSamplePage);

module.exports = router;
