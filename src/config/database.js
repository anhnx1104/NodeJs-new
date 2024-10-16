const mysql = require("mysql2"); // Dùng cho Callback
const mysqlPromise = require("mysql2/promise"); // Dùng cho Promise

require("dotenv").config();

// Tạo Connection Pool cho Promise
const poolPromise = mysqlPromise.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Tạo Connection Pool cho Callback
const connection = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Xuất cả hai pool
module.exports = {
  connection,
  poolPromise,
};
