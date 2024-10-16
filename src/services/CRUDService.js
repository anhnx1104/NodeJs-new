const { poolPromise } = require("../config/database");

const getAllUsers = async () => {
  let [results, fields] = await poolPromise.query("select * from User");
  return results;
};

module.exports = {
  getAllUsers,
};
