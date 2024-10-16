require("dotenv").config();
const express = require("express");
const configViewEngine = require("./config/viewEngine");

const app = express();
const port = process.env.PORT || 8081;
const webRouter = require("./routes/web");
const connection = require("./config/database");

connection.query("select * from User", function (error, results, fields) {
  if (error) throw error;
  console.log("The results is: ", results);
});

//config static files
configViewEngine(app);

app.use("/v1", webRouter);

app.listen(port, () => {
  console.log(`Start  on port: ${port}`);
});
