const express = require("express");
const {
  getHomePage,
  postCreateUser,
  getCreatePage,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/home", getHomePage);
router.get("/create", getCreatePage);
router.post("/create-user", postCreateUser);

module.exports = router;
