const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
require("dotenv").config();

const bodyParser = require("body-parser");

const app = express();
const MONGO_URI = process.env.MONGO_URI;

app.use(express.json());
app.use("/api", require("./routes"));
app.use(express.static("public"));
app.use(cors({ origin: "http://localhost:3000" }));

var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(urlencodedParser);

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));
