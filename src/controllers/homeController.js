const getHomePage = (req, res) => {
  res.send("Hello HomePage");
};

const getSamplePage = (req, res) => {
  res.render("sample.ejs");
};

module.exports = {
  getHomePage,
  getSamplePage,
};
