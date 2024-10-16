const connection = require("../config/database");

let user = [];
const getHomePage = (req, res) => {
  return res.render("homepage.ejs");
};

const getSamplePage = (req, res) => {
  res.render("sample.ejs");
};

module.exports = {
  getHomePage,
  getSamplePage,
};
