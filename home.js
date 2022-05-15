const express = require("express");
const cors = require("cors");
const db = require("./db");
var bodyParser = require("body-parser");

const app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(cors());
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
  return;
});

app.post("/get", urlencodedParser, async (req, res) => {
  console.log(req.body);
  const data = await db.query(
    `select * from Table where barcode='${req.body.barcode}'`
  );
  res.send(data);
  return { data };
});

app.listen(3000, () => {
  console.log("I am listen");
});
