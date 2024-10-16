const express = require("express");
const {
  getHomePage,
  getSamplePage,
  postCreateUser,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/home", getHomePage);
router.post("/create-user", postCreateUser);

router.get("/sample", getSamplePage);

module.exports = router;
