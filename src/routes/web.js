const express = require("express");
const {
  getHomePage,
  postCreateUser,
  getCreatePage,
  updateUser,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/home", getHomePage);
router.get("/create", getCreatePage);
router.get("/update/:id", updateUser);
router.post("/create-user", postCreateUser);

module.exports = router;
