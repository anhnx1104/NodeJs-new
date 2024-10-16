const { connection, poolPromise } = require("../config/database");
const { getAllUsers, getUserById } = require("../services/CRUDService");

const getHomePage = async (req, res) => {
  let results = await getAllUsers();
  return res.render("homepage.ejs", { listUser: results });
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

const updateUser = async (req, res) => {
  const userId = req.params.id;

  let user = await getUserById(userId);
  res.render("edit.ejs", { userEdit: user });
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
  updateUser,
};
