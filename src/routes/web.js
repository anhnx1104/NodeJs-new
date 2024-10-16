const express = require("express");
const {
  getHomePage,
  postCreateUser,
  getCreatePage,
  updateUser,
  postUpdateUser,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/home", getHomePage);
router.get("/create", getCreatePage);
router.post("/create-user", postCreateUser);

router.get("/update/:id", updateUser);
router.post("/update-user", postUpdateUser);

module.exports = router;
