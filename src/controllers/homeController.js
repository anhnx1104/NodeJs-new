const connection = require("../config/database");

const getHomePage = (req, res) => {
  return res.render("homepage.ejs");
};

const getSamplePage = (req, res) => {
  res.render("sample.ejs");
};

const postCreateUser = (req, res) => {
  const { name, email, city } = req.body;
  console.log("postCreateUser", req.body);
  res.send("123");
};
module.exports = {
  getHomePage,
  getSamplePage,
  postCreateUser,
};
