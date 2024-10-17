const express = require("express");
const {
  getHomePage,
  postCreateUser,
  getCreatePage,
  updateUser,
  postUpdateUser,
  deletUserById,
  confirmDeleteUserById,
} = require("../controllers/homeController");
const router = express.Router();
router.get("/home", getHomePage);
router.get("/create", getCreatePage);
router.post("/create-user", postCreateUser);
router.get("/update/:id", updateUser);
router.post("/update-user", postUpdateUser);

router.post("/delete-user", deletUserById);
router.post("/delete-user/:id", confirmDeleteUserById);

module.exports = router;
