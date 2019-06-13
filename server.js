const express = require("express");
const serveStatic = require("serveStatic");
const app = express();
const path = require("path");

app.use("/", serveStatic(path.join(__dirname, "/dist/")));
const port = process.env.Port || 8080;
app.listen(port);

console.log("listening port" + port);
