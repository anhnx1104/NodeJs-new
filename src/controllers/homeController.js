const connection = require("../config/database");

const getHomePage = (req, res) => {
  return res.render("homepage.ejs");
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};
const postCreateUser = async (req, res) => {
  try {
    let { name, email, city } = req.body;

    // Sử dụng promise để gọi query
    const [result] = await connection
      .promise()
      .query(`INSERT INTO User (email, name, city) VALUES (?, ?, ?)`, [
        email,
        name,
        city,
      ]);

    console.log("result>>", result);
    return res.send("success");
  } catch (error) {
    console.error("Error inserting user:", error);
    return res.status(500).send("Error inserting user");
  }
};
module.exports = {
  getHomePage,
  postCreateUser,
  getCreatePage,
};
