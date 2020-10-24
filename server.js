require("dotenv").config();
const express = require("express");
const apiMain = require("./api/main");
const bodyParser = require("body-parser");
global.fetch = require("node-fetch");
// const session = require("express-session");
// const passport = require("passport");
const apiHeartbeat = require("./api/apiHeartbeat");
const apiBooks = require("./api/apiBooks");

const app = express();

app.use("/", express.static(__dirname + "/public"));
app.use("/js", express.static(__dirname + "/js"));
app.use("/css", express.static(__dirname + "/css"));

app.use(bodyParser.json());

// API routing
app.use("/", apiMain);
app.use("/api/apiHeartbeat", apiHeartbeat);
app.use("/api/apiBooks", apiBooks);

app.listen(3001, () => {
  console.log("The server is running on port 3001");
});