const express = require("express");
const todoRouter = require("./src/routes/todo.router.js");
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./src/config/config.js")

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static("public"));

app.use("/todo", todoRouter);

mongoose.set("strictQuery", false);

mongoose.connect(config.dbURL, {dbName: config.dbName})
.then(()=>{
  app.listen(config.port, () => {
    console.log("Puerto 8080 escuchando");
  })
})



