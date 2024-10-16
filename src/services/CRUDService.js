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

module.exports = {
  getAllUsers,
  getUserById,
};
