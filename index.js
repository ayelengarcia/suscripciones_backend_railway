const express = require("express");
const todoRouter = require("./src/routes/todo.router.js");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 8080
const dbName = "DBsuscripciones";
const URL =
  "mongodb+srv://ayelengarcia7:eIXUnjHpOu7NgSKF@clustercoder.t6a33ln.mongodb.net/?retryWrites=true&w=majority";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static("public"));

app.use("/todo", todoRouter);

mongoose.set("strictQuery", false);

mongoose.connect(URL, {dbName: dbName})
.then(()=>{
  app.listen(PORT, () => {
    console.log("Puerto 8080 escuchando");
  })
})



