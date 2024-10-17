const { poolPromise } = require("../config/database");

const getAllUsers = async () => {
  let [results, fields] = await poolPromise.query("select * from User");
  return results;
};
const getUserById = async (userId) => {
  let [results, fields] = await poolPromise.query(
    "select * from User where id = ?",
    [userId]
  );

  let userEdit = results && results.length > 0 ? results[0] : {};
  return userEdit;
};

const updateUserById = async (email, name, city, userId) => {
  const [result] = await poolPromise.query(
    `UPDATE User SET name = ? ,email = ?, city = ? where id = ?`,
    [email, name, city, userId]
  );
};

const handleaDeleteUser = async (userId) => {
  await poolPromise.query(`DELETE FROM User WHERE id =?`, [userId]);
};

module.exports = {
  getAllUsers,
  getUserById,
  updateUserById,
  handleaDeleteUser,
};
