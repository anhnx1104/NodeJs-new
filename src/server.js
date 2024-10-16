require("dotenv").config();
const express = require("express");
const configViewEngine = require("./config/viewEngine");

const app = express();
const port = process.env.PORT || 8081;
const webRouter = require("./routes/web");

//config static files
configViewEngine(app);

app.use("/v1", webRouter);

app.listen(port, () => {
  console.log(`Start  on port: ${port}`);
});
