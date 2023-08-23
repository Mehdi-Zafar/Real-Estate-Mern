const express = require("express");
const { default: mongoose } = require("mongoose");
const Router = require("./routes/router");
require("dotenv").config();

const app = express();

const dbURI = process.env.MONGO_URL;
mongoose
  .connect(dbURI)
  .then((result) => {
    app.listen(process.env.PORT, () => {
      console.log("connected to db");
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

app.use("/property", Router);
