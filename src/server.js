require("dotenv").config();
const express = require("express");
const configViewEngine = require("./config/viewEngine");

const app = express();
const port = process.env.PORT || 8081;
const webRouter = require("./routes/web");

//config static files
configViewEngine(app);

//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//config webRouter

app.use("/", webRouter);

app.listen(port, () => {
  console.log(`Start  on port: ${port}`);
});
